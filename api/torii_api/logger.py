import os
from logging import CRITICAL, DEBUG, INFO, Formatter, StreamHandler, getLogger


def create_logger():
    logger = getLogger('api')
    stream_handler = StreamHandler()
    formatter = Formatter('[%(asctime)s]\t%(levelname)s\t%(pathname)s:%(lineno)d\t%(message)s')
    stream_handler.setFormatter(formatter)
    logger.addHandler(stream_handler)

    env = os.getenv('FLASK_ENV')
    if env == 'development':
        logger.setLevel(DEBUG)
    elif env == 'test':
        logger.setLevel(CRITICAL)
    else:
        logger.setLevel(INFO)

    return logger


logger = create_logger()
