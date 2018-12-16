import json
import traceback

from aws_xray_sdk.core import patch_all, xray_recorder
from aws_xray_sdk.core.context import Context
from aws_xray_sdk.ext.flask.middleware import XRayMiddleware
from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
from jinja2 import TemplateError

from exceptions import ContextValueError  # isort:skip
from logger import logger  # isort:skip
from rendering import render  # isort:skip

ERROR_TYPE_TEMPLATE = 'template'
ERROR_TYPE_CONTEXT = 'context'
ERROR_TYPE_OTHER = 'other'

app = Flask(__name__)
CORS(app, origins=[
    r'http://localhost.*',
    r'https?://torii.shirakiya.com',  # Change URL if you want to host site yourself.
])

xray_recorder.configure(
    service='torii',
    sampling=False,
    context=Context(),
    context_missing='LOG_ERROR',
)
XRayMiddleware(app, xray_recorder)
patch_all()


def log_error():
    tb = traceback.format_exc().replace('\n', '\t')
    logger.error(tb)


def make_error_response(error_message, error_class_name, error_type=ERROR_TYPE_OTHER):
    log_error()
    return make_response(jsonify({
        'error_class': error_class_name,
        'message': error_message,
        'type': error_type,
    }), 500)


@app.route('/render', methods=['POST'])
def render_jinja():
    try:
        params = request.json
        logger.info(json.dumps(params))

        template_text = params['statement']
        context_text = params['context']

        rendered = render(template_text, context_text)

        return jsonify({
            'rendered': rendered,
        })
    except ContextValueError as e:
        return make_error_response(str(e), 'ValueError', ERROR_TYPE_CONTEXT)
    except TemplateError as e:
        return make_error_response(str(e), e.__class__.__name__, ERROR_TYPE_TEMPLATE)
    except Exception as e:
        return make_error_response(str(e), e.__class__.__name__, ERROR_TYPE_OTHER)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
