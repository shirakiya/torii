from unittest import TestCase

from jinja2.exceptions import TemplateSyntaxError
from parameterized import parameterized

from exceptions import ContextValueError  # isort:skip
from rendering import render  # isort:skip


class RenderTestCase(TestCase):

    @parameterized.expand([
        ('{{ hoge }} {{ fuga.piyo }}', "{'hoge': 'ほげ', 'fuga': {'piyo': 'ぴよ'}}", 'ほげ ぴよ'),
        ('{{ hoge }} ', '{}', ' '),
    ])
    def test_render(self, template_text, context_text, expected):
        actual = render(template_text, context_text)

        self.assertEqual(actual, expected)

    def test_render_if_non_dict_context_passed(self):
        template_text = 'foo'
        context_text = 'bar'

        with self.assertRaises(ContextValueError):
            render(template_text, context_text)

    def test_render_if_invalid_template_passed(self):
        template_text = '{{ hoge'
        context_text = '{}'

        with self.assertRaises(TemplateSyntaxError):
            render(template_text, context_text)
