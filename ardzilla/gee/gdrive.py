""" Helper utilities for using Google Drive
"""
import functools
import io
import json
import logging
import os

from apiclient.http import MediaIoBaseUpload

logger = logging.getLogger(__name__)

MIME_TYPE_DIRECTORY = 'application/vnd.google-apps.folder'
MIME_TYPE_FILE = 'application/vnd.google-apps.file'


def upload_json(service, data, name, dest=None, check=False):
    """ Upload JSON data to Google Drive

    Parameters
    ----------
    service : googleapiclient.discovery.Resource
        Google API resource for GDrive v3
    data : str or dict
        JSON, either already dumped to str or as a dict
    name : str
        Filename for data
    dest : str, optional
        Parent directory to put file. If ``None``, stores in
        root of Google Drive
    check : bool, optional
        Check to see if the file already exists first. If so, will
        overwrite (or "update" instead of "create")

    Returns
    -------
    str
        ID of file uploaded
    """
    # Dump to JSON if needed
    if not isinstance(data, str):
        data = json.dumps(data, indent=2)

    # Find folder ID for parent directory
    if dest:
        dest_id = mkdir_p(service, dest)
    else:
        dest_id = None

    # Prepare metadata body & data
    body = {
        'name': name,
        'parents': [dest_id],
        'mimeType': 'text/plain',
    }
    content = io.BytesIO(data.encode('utf-8'))
    media = MediaIoBaseUpload(content, 'text/plain', resumable=True)

    # Check to see if file already exists...
    if check:
        file_id = exists(service, name, parent_id=dest_id)
    else:
        file_id = ''

    # Update or create
    if check and file_id:
        req = service.files().update(fileId=file_id, media_body=media)
    else:
        req = service.files().create(body=body, media_body=media, fields='id')
    meta = req.execute()

    return meta['id']


def mkdir_p(service, dest, parent_id=None):
    """ Make a directory, recursively

    Parameters
    ----------
    service : googleapiclient.discovery.Resource
        Google API resource for GDrive v3
    dest : str
        Directory to create

    Returns
    -------
    str
        Google Drive ID for directory created (or already existing)
    """
    paths = dest.split('/', 1)
    if len(paths) == 1:  # root
        name_id = exists(service, paths[0], parent_id=parent_id)
        if not name_id:
            return mkdir(service, paths[0], parent_id=parent_id)
        else:  # already exists
            return name_id
    else:
        name, paths_ = paths[0], paths[1:]
        name_id = exists(service, name, parent_id=parent_id, directory=True)
        if not name_id:
            name_id = mkdir(service, name, parent_id=parent_id)
        dest_ = '/'.join(paths_)
        return mkdir_p(service, dest_, parent_id=name_id)


def mkdir(service, name, parent_id=None):
    """ Make a directory on GDrive
    """
    meta = {
        'name': name,
        'mimeType': MIME_TYPE_DIRECTORY,
    }
    if parent_id is not None:
        meta['parents'] = [parent_id]
    logger.debug(f'Creating directory {name}')
    dir_ = service.files().create(body=meta, fields='id').execute()
    return dir_['id']


def _memoize_exists(func):
    cache = {}
    @functools.wraps(func)
    def inner(*args, **kwds):
        # don't use "service" as key
        key = (args[1],
               kwds.get('parent_id', None),
               kwds.get('directory', False),
               kwds.get('trashed', False), )
        if key in cache:
            return cache[key]
        else:
            ans = func(*args, **kwds)
            # only cache "hits" (id != '')
            if ans:
                cache[key] = ans
            return ans

    return inner


@_memoize_exists
def exists(service, name, parent_id=None, directory=False, trashed=False):
    """ Check if file/folder exists

    Parameters
    ----------
    service : googleapiclient.discovery.Resource
        Google API resource for GDrive v3
    name : str
        Name of file/folder
    parent_id : str, optional
        Parent ID of folder containing file (to narrow search)
    directory : bool, optional
        True if file needs to also be a directory
    trashed : bool, optional
        Search in the trash?

    Returns
    -------
    str
        Returns object ID if exists, otherwise empty string
    """
    q = [
        f'trashed = {"true" if trashed else "false"}',
        f'name = "{name}"'
    ]
    if directory:
        q.append(f'mimeType = "{MIME_TYPE_DIRECTORY}"')
    if parent_id is not None:
        q.append(f'"{parent_id}" in parents')

    q_ = ' and '.join(q)
    logger.debug(f'Searching for query: "{q_}"')
    query = service.files().list(q=q_).execute().get('files', [])

    if query:
        if len(query) > 1:
            logger.debug('Found more than 1 result -- returning first')
        return query[0]['id']
    else:
        return ''