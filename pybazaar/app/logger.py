import logging
from termcolor import colored


class ColoredFormatter(logging.Formatter):
    COLORS = {
        'WARNING': 'yellow',
        'INFO': 'green',
        'DEBUG': 'white',
        'CRITICAL': 'red',
        'ERROR': 'red'
    }

    def format(self, record):
        log_message = super().format(record)
        return colored(log_message, self.COLORS.get(record.levelname))


async def init_logger():
    # Create a logging handler and specify the output stream as stdout
    handler = logging.StreamHandler()
    handler.setLevel(logging.DEBUG)
    # Create a formatter with your custom date format
    formatter = ColoredFormatter(
        '[%(asctime)s] [%(levelname)s] - %(message)s', datefmt='%d-%m-%YT%H:%M:%S.%f')
    handler.setFormatter(formatter)

    # Add the handler to the logger
    logger.addHandler(handler)
    logger.setLevel(logging.DEBUG)

    # Set the logger for Uvicorn
    uvicorn_logger = logging.getLogger("uvicorn")
    uvicorn_logger.handlers = []
    uvicorn_logger.addHandler(handler)
    uvicorn_logger.setLevel(logging.DEBUG)


logger = logging.getLogger()
