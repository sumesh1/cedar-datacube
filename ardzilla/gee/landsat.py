""" Functions for dealing with Landsat data on GEE
"""
import datetime as dt

import ee

from stems.gis.grids import TileGrid, Tile

from . import common


# Renaming stuff
BANDS_COMMON = ['blue', 'green', 'red', 'nir',
                'swir1', 'swir2', 'thermal', 'pixel_qa']

BANDS_LT5 = ['B1', 'B2', 'B3', 'B4', 'B5', 'B7',  'B6', 'pixel_qa']
BANDS_LE7 = ['B1', 'B2', 'B3', 'B4', 'B5', 'B7',  'B6', 'pixel_qa']
BANDS_LC8 = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10', 'pixel_qa']

BANDS = {
    'COMMON': BANDS_COMMON,
    'LANDSAT/LC08/C01/T1_SR': BANDS_LC8,
    'LANDSAT/LT05/C01/T1_SR': BANDS_LT5,
    'LANDSAT/LE07/C01/T1_SR': BANDS_LE7
}

_T1_SR_METADATA = [
    'CLOUD_COVER',
    'CLOUD_COVER_LAND',
    'EARTH_SUN_DISTANCE',
    'ESPA_VERSION',
    'GEOMETRIC_RMSE_MODEL',
    'GEOMETRIC_RMSE_MODEL_X',
    'GEOMETRIC_RMSE_MODEL_Y',
    'IMAGE_QUALITY_OLI',
    'LANDSAT_ID',
    'LEVEL1_PRODUCTION_DATE',
    'SATELLITE',
    'SENSING_TIME',
    'SOLAR_AZIMUTH_ANGLE',
    'SOLAR_ZENITH_ANGLE',
    'SR_APP_VERSION',
    'WRS_PATH',
    'WRS_ROW',
    'system:id',
    'system:time_start',
    'system:version'
]
METADATA = {
    'LANDSAT/LC08/C01/T1_SR': _T1_SR_METADATA,
    'LANDSAT/LT05/C01/T1_SR': _T1_SR_METADATA,
    'LANDSAT/LE07/C01/T1_SR': _T1_SR_METADATA
}


def create_ard(collection, tile, date_start, date_end):
    """ Create an ARD :py:class:`ee.Image`

    Parameters
    ----------
    collection : str
        GEE image collection name
    tile : stems.gis.grids.Tile
        STEMS TileGrid tile
    date_start : dt.datetime
        Starting period
    date_end : dt.datetime
        Ending period

    Returns
    -------
    ee.Image
        "ARD" image from collection with all observations within period
    Sequence[dict]
        Metadata, one dict per image
    """
    assert isinstance(collection, str)
    assert isinstance(date_start, dt.datetime)
    assert isinstance(date_end, dt.datetime)

    # Get collection
    imgcol = ee.ImageCollection(collection)
    if not collection in BANDS.keys():
        raise KeyError(f'Unsupported image collection "{collection}"')

    # Find images in tile
    imgcol = common.filter_collection_tile(imgcol, tile)

    # For each unique date of imagery in this image collection covering the tile
    imgcol = common.filter_collection_time(imgcol, date_start, date_end)

    # Select and rename bands
    imgcol = imgcol.select(BANDS[collection], BANDS['COMMON'])

    imgcol_udates = common.get_collection_uniq_dates(imgcol)

    # Loop over unique dates, making mosaics to eliminate north/south if needed
    prepped = []
    for udate in sorted(imgcol_udates):
        # Prepare and get metadata for unique date
        img, meta = _prep_collection_image(imgcol, collection, tile, udate)
        # Add image and metadata
        prepped.append((img, meta))

    # Unpack
    images, _ = list(zip(*prepped))

    # Get all metadata at once (saves time back and forth)
    metadata = ee.List(_).getInfo()

    # Re-create as collection and turn to bands (n_image x bands_per_image)
    tile_col = ee.ImageCollection.fromImages(images)
    tile_bands = tile_col.toBands()

    # Reproject, clip, & convert dtype to be uniform
    f_reproj = common.map_reproj_image_tile(tile)
    f_clip = common.map_clip_image_tile(tile)
    tile_bands_proj = f_clip(f_reproj(tile_bands)).toInt16()

    # TODO: turn off check -- costly!
    # Check dimensions to make sure
    dims = tile_bands_proj.getInfo()['bands'][0]['dimensions']
    assert tuple(dims) == tuple(tile.size)

    return tile_bands_proj, list(metadata)


def export_desc(collection, tile, d_start, d_end,
                version='v01', prefix='GEEARD'):
    """ Calculate a filename for GEE ARD downloads

    Parameters
    ----------
    imgcol : str
        GEE image collection name
    tile : stems.gis.grids.Tile
        STEMS TileGrid tile
    date_start : dt.datetime
        Starting period
    date_end : dt.datetime
        Ending period
    """
    # We need a LOT of metadata in the name...
    collection_ = collection.replace('/', '-')
    hv = f"h{tile.horizontal:03d}v{tile.vertical:03d}"
    d_start_ = d_start.strftime('%Y-%m-%d')
    d_end_ = d_end.strftime('%Y-%m-%d')

    desc = '_'.join([prefix, version, collection_, hv, d_start_, d_end_])
    return desc


def export_path(collection, tile, d_start, d_end,
                version='v01', prefix='GEEARD'):
    collection_ = collection.replace('/', '-')
    hv = f"h{tile.horizontal:03d}v{tile.vertical:03d}"

    path = '/'.join([
        prefix,
        version,
        collection_,
        hv
    ])
    return path


def _imgcol_metadata(imgcol, keys):
    """ Return metadata for Landsat image collection
    """
    def inner(img, previous):
        meta = common.object_metadata(img, keys)
        previous_ = ee.List(previous)
        return ee.List(previous_.add(meta))

    meta = imgcol.iterate(inner, ee.List([]))
    return meta


def _prep_collection_image(imgcol, collection, tile, date):
    """ Prepare an image for ``tile`` and ``date`` from an ImageCollection
    """
    # Filter for this date (day <-> day+1)
    date_end = (date + dt.timedelta(days=1))
    imgcol_ = common.filter_collection_time(imgcol, date, date_end)

    # TODO: make optional -- getInfo is a big slowdown!
    # Check to make sure just 1 unique date
    _ = common.get_collection_uniq_dates(imgcol_)
    assert len(_) == 1

    # Prepare all images in this collection (i.e., 1 or 2, depending on overlap)
    img = (
        imgcol_
        .map(common.map_clip_image_tile(tile))
        .mosaic()
    )

    # Get metadata from each image in new, potentially mosaiced ``img``
    keys = METADATA[collection]
    meta = _imgcol_metadata(imgcol_, keys)

    return img, meta