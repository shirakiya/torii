import os
from logging import getLogger, Formatter, StreamHandler, DEBUG, INFO


def create_logger():
    logger = getLogger('api')
    stream_handler = StreamHandler()
    formatter = Formatter('[%(asctime)s]\t%(levelname)s\t%(pathname)s:%(lineno)d\t%(message)s')
    stream_handler.setFormatter(formatter)
    logger.addHandler(stream_handler)

    if os.getenv('ENV') == 'development':
        logger.setLevel(DEBUG)
    else:
        logger.setLevel(INFO)

    return logger


logger = create_logger()
