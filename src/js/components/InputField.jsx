import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'


class InputField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      statement: this.props.statement,
      context: this.props.context,
    };
  }

  tab2space(e, updateStateKey) {
    if (e.key === 'Tab' && e.keyCode !== 229) {
      e.preventDefault();

      const element = e.target;

      const text = element.value;
      const start = element.selectionStart;
      const end = element.selectionEnd;

      const spaceCount = 4;
      const substitution = Array(spaceCount + 1).join(' ');

      const updatedState = {};
      updatedState[updateStateKey] = text.substring(0, start) + substitution + text.substring(end, text.length);

      this.setState(updatedState, () => {
        element.setSelectionRange(start + spaceCount, start + spaceCount);
      });
    }
  }

  handleTemplateInput(e) {
    this.setState({ statement: e.target.value });
  }

  handleTemplateKeyDown(e) {
    this.tab2space(e, 'statement');
  }

  handleContextInput(e) {
    this.setState({ context: e.target.value });
  }

  handleContextKeyDown(e) {
    this.tab2space(e, 'context')
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.inSubmit) {
      this.props.stopNextCall()
      this.props.submit(this.state.statement, this.state.context.trim());
    }
  }

  render() {
    const { inSubmit, errorType } = this.props;

    return (
      <div className="input-field-container">
        <form>
          <div className="row">
            <div className="col">
              <h3>Template Statement</h3>
              <div className="form-group">
                <textarea
                  className={`form-control fixed ${errorType === 'template' && 'is-invalid'}`}
                  rows="16"
                  placeholder="{% if foo == 'bar' %}Nice to meet you.{% else %}Hello.{% endif %}"
                  autoFocus
                  value={this.state.statement}
                  onChange={this.handleTemplateInput.bind(this)}
                  onKeyDown={this.handleTemplateKeyDown.bind(this)}
                ></textarea>
              </div>
            </div>
            <div className="col">
              <h3 data-tip data-for="context-title">Context Settings</h3>
              <ReactTooltip id="context-title">
                Set your context object used for rendering.
              </ReactTooltip>
              <div className="card context-container">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="context-input" data-tip data-for="context-object-description">Context object</label>
                    <ReactTooltip id="context-object-description">
                      Input Python dict object
                    </ReactTooltip>
                    <textarea
                      className={`form-control ${errorType === 'context' && 'is-invalid'}`}
                      id="context-input"
                      rows="12"
                      placeholder="{ 'foo': 'bar', 'list_a': ['b': 'c'] }"
                      value={this.state.context}
                      onChange={this.handleContextInput.bind(this)}
                      onKeyDown={this.handleContextKeyDown.bind(this)}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
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
