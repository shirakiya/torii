import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/mode/jinja2/jinja2';
import 'codemirror/mode/python/python';
import 'codemirror/addon/display/placeholder';
import LocalStorage from './../utils/localStorage.js';


class InputField extends React.Component {

  constructor(props) {
    super(props);
    this.localStorage = new LocalStorage();

    const initialStatement = this.localStorage.getItem('statement') || '';
    const initialContext = this.localStorage.getItem('context') || '{\n}';

    this.state = {
      statement: this.props.statement || initialStatement,
      context: this.props.context || initialContext,
    };
  }

  _store(key, value) {
    this.localStorage.setItem(key, value);
  }

  handleTemplateInput(editor, data, code) {
    this.setState({ statement: code });
    this._store('statement', code);
  }

  handleContextInput(editor, data, code) {
    this.setState({ context: code });
    this._store('context', code);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.props.inSubmit) {
      this.props.stopNextCall();
      this.props.submit(this.state.statement, this.state.context.trim());
    }
  }

  render() {
    const { inSubmit, errorType } = this.props;

    const statementOptions = {
      mode: 'jinja2',
      lineNumbers: true,
      lineWrapping: true,
      placeholder: '{% if foo == "bar" %}Nice to meet you.{% else %}Hello.{% endif %}',
    };

    const contextOptions = {
      mode: 'python',
      lineNumbers: true,
      lineWrapping: true,
      placeholder: '{ "foo": "bar", "list_a": ["b": "c"] }',
    };

    return (
      <div className="input-field-container">
        <form autoComplete="on">
          <div className="row">
            <div className="col-md-6">
              <h3>Template Statement</h3>
              <div className="form-group">
                <CodeMirror
                  className={`statement-editor ${errorType === 'template' && 'is-invalid'}`}
                  options={statementOptions}
                  autoFocus
                  value={this.state.statement}
                  onBeforeChange={this.handleTemplateInput.bind(this)}
                  onChange={this.handleTemplateInput.bind(this)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <h3 data-tip data-for="context-title">Context Settings</h3>
              <ReactTooltip id="context-title">
                Set your context object used for rendering.
              </ReactTooltip>
              <div className="card context-container">
                <div className="card-body">
                  <div className="form-group">
                    <h5 data-tip data-for="context-object-description">Context object</h5>
                    <ReactTooltip id="context-object-description">
                      Input Python dict object
                    </ReactTooltip>
                    <CodeMirror
                      className={`context-editor ${errorType === 'context' && 'is-invalid'}`}
                      options={contextOptions}
                      value={this.state.context}
                      onBeforeChange={this.handleContextInput.bind(this)}
                      onChange={this.handleContextInput.bind(this)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center submit">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={this.handleSubmit.bind(this)}
              disabled={!this.state.statement || inSubmit}
            >Get Result</button>
          </div>
        </form>
      </div>
    );
  }
}

InputField.propTypes = {
  statement: PropTypes.string,
  context: PropTypes.string,
  inSubmit: PropTypes.bool.isRequired,
  errorType: PropTypes.string,
  stopNextCall: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default InputField;
