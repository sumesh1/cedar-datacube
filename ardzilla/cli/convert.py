""" CLI for converting "pre-ARD" to ARD data cubes
"""
import logging
from pathlib import Path

import click

from stems.cli import options as cli_options

from . import options


@click.command('convert',
               short_help='Convert downloaded "pre-ARD" data to ARD NetCDFs')
@click.argument('preard', type=click.Path(exists=True, resolve_path=True))
@click.option('--dest', type=click.Path(file_okay=False, resolve_path=True),
              help='Override config file destination directory')
@cli_options.opt_scheduler
@cli_options.opt_nprocs
@cli_options.opt_nthreads
@options.opt_overwrite
@click.pass_context
def convert(ctx, preard, dest, overwrite, scheduler, nprocs, nthreads):
    """ Convert "pre-ARD" GeoTIFF(s) to ARD data cubes in NetCDF4 format
    """
    from dask.diagnostics import ProgressBar
    from jinja2 import Template
    from stems.utils import renamed_upon_completion

    from ardzilla.preard import (ard_netcdf_encoding, find_preard,
                                 process_preard, read_metadata)

    # Provide debug info for the scheduler
    logger = ctx.obj['logger']
    if scheduler is not None and logger.level == logging.DEBUG:
        from stems.executor import executor_info
        info = executor_info(scheduler)
        for i in info:
            logger.debug(i)

    # Get configuration and any encoding provided
    cfg = options.fetch_config(ctx)
    ard_cfg = cfg.config['ard']
    encoding_cfg = ard_cfg.get('encoding', {})

    preard_files = find_preard(preard)
    if len(preard_files) == 0:
        raise FileNotFoundError('Could not find pre-ARD files to process')
    click.echo(f"Found metadata for {len(preard_files)} pre-ARD to convert")

    # Destination directory from config file, or overriden from CLI
    dest = dest or ard_cfg['destination']

    for i, (meta, images) in enumerate(preard_files.items()):
        # Read metadata first so we know what is in order
        metadata = read_metadata(meta)

        # Destination can depend on info in metadata - format it
        dest_ = Path(Template(dest).render(**metadata))
        dest_.mkdir(parents=True, exist_ok=True)
        click.echo(f'Processing pre-ARD "{meta.stem}" to destination {dest_}')

        # Read TIFF files into ARD-like xr.Dataset
        ard_ds = process_preard(metadata, images)

        # Determine encoding
        encoding = ard_netcdf_encoding(ard_ds, metadata, **encoding_cfg)

        # Setup write to NetCDF
        dest_ = dest_.joinpath(meta.stem + '.nc')

        with renamed_upon_completion(dest_) as tmp:
            ard_ds_ = ard_ds.to_netcdf(tmp, encoding=encoding, compute=False)

            # Write with progressbar
            with ProgressBar():
                out = ard_ds_.compute()

    click.echo('Complete')