import os
from logging import getLogger, CRITICAL, Formatter, StreamHandler, DEBUG, INFO


def create_logger():
    logger = getLogger('api')
    stream_handler = StreamHandler()
    formatter = Formatter('[%(asctime)s]\t%(levelname)s\t%(pathname)s:%(lineno)d\t%(message)s')
    stream_handler.setFormatter(formatter)
    logger.addHandler(stream_handler)

    env = os.getenv('ENV')
    if env == 'development':
        logger.setLevel(DEBUG)
    elif env == 'test':
        logger.setLevel(CRITICAL)
    else:
        logger.setLevel(INFO)

    return logger


logger = create_logger()
