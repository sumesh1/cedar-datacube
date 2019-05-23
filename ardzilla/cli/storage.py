""" CLI for downloading data
"""
import click

from . import options


@click.command('download',
               short_help='Download exported "pre-ARD" data from storage')
@options.arg_tracking_name
@options.arg_dest_dir
@options.opt_overwrite
@click.pass_context
def download(ctx, tracking_name, dest_dir, overwrite):
    """ Download pre-ARD described by tracking information

    \b
    TODO
    ----
    * Progressbar is not very accurate
    * We don't check status
    * Limit to some tasks (?)
    * Silence / don't use progressbar if we're quiet
    * Only download some tasks
    """
    config = options.fetch_config(ctx)
    tracker = config.get_tracker()

    click.echo(f'Retrieving info about pre-ARD in "{tracking_name}"')
    tracking_info = tracker.read(tracking_name)

    n_tasks = len(tracking_info['tasks'])
    click.echo(f'Downloading data for {n_tasks} tasks')
    with click.progressbar(label='Downloading',
                           item_show_func=_item_show_func,
                           length=n_tasks) as bar:
        cb_bar = _make_callback(bar)
        dl_info = tracker.download(tracking_info, dest_dir,
                                   overwrite=overwrite, callback=cb_bar)
    click.echo('Complete!')


@click.command('clean',
               short_help='Clean/delete exported "pre-ARD" data from storage')
@options.arg_tracking_name
@click.pass_context
def clean(ctx, tracking_name):
    """ Clean pre-ARD described by tracking information
    """
    config = options.fetch_config(ctx)
    tracker = config.get_tracker()

    click.echo(f'Retrieving info about pre-ARD in "{tracking_name}"')
    tracking_info = tracker.read(tracking_name)

    n_tasks = len(tracking_info['tasks'])
    click.echo(f'Cleaning data for {n_tasks} tasks')

    with click.progressbar(label='Cleaning',
                           item_show_func=_item_show_func,
                           length=n_tasks) as bar:
        cb_bar = _make_callback(bar)
        clean_info = tracker.clean(tracking_info, callback=cb_bar)
    click.echo('Complete!')


def _make_callback(bar):
    def callback(item, n_steps):
        bar.current_item = item
        bar.update(n_steps)
    return callback

def _item_show_func(item):
    return str(item) if item else ''