from flask import Flask, request, jsonify
# from pprint import pprint

app = Flask(__name__)


@app.route('/run', methods=['POST'])
def run_jinja():
    params = request.json
    return jsonify(params)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
