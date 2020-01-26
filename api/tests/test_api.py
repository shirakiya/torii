import json
from unittest import TestCase

from torii_api.app import app


class ApiTestCase(TestCase):

    def setUp(self):
        app.testing = True
        self.client = app.test_client()

    def _post_render(self, params):
        return self.client.post('/render',
                                data=json.dumps(params),
                                content_type='application/json')

    def _parse_json_data(self, response):
        return json.loads(response.data.decode('utf-8'))

    def test_render_jinja(self):
        response = self._post_render({
            'statement': 'Some statement. {{ hoge }}',
            'context': "{'hoge': 'ほげ'}",
        })

        self.assertEqual(response.status_code, 200)
        self.assertEqual(self._parse_json_data(response), {
            'rendered': 'Some statement. ほげ',
        })

    def test_render_returns_error_with_error_type_context(self):
        response = self._post_render({
            'statement': 'Some statement. {{ hoge }}',
            'context': "{'hoge'}",
        })

        self.assertEqual(response.status_code, 500)
        self.assertEqual(self._parse_json_data(response), {
            'error_class': 'ValueError',
            'message': 'Context settings is not dict syntax.',
            'type': 'context',
        })

    def test_render_returns_error_with_error_type_template(self):
        response = self._post_render({
            'statement': 'Some statement. {{ hoge',
            'context': "{'hoge': 'ほげ'}",
        })

        self.assertEqual(response.status_code, 500)
        self.assertEqual(self._parse_json_data(response), {
            'error_class': 'TemplateSyntaxError',
            'message': "unexpected end of template, expected 'end of print statement'.",
            'type': 'template',
        })
