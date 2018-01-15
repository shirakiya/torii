import React from 'react';
import PropTypes from 'prop-types';


class ResultField extends React.Component {
  constructor(props) {
    super(props);
  }

  nl2br(text) {
    const regexp = /(\n)/g
    return text.split(regexp).map((line, index) => {
      if (line.match(regexp)) {
        return (<br key={index} />);
      } else {
        return line;
      }
    });
  }

  getContent() {
    const { rendered, errorMessage } = this.props;

    if (errorMessage) {
      return (
        <div className="alert alert-danger">
          <p>{this.nl2br(errorMessage)}</p>
        </div>
      );
    } else {
      if (rendered) {
        return (
          <div className="card">
            <div className="card-body">
              <div className='lead'>
                {this.nl2br(rendered)}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="alert alert-secondary">
            <p>Rendering result will be showed here.</p>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div className="result-field-container">
        <h3>Rendering Result</h3>
        <div className="result-field-content">
          {this.getContent()}
        </div>
      </div>
    );
  }
}

ResultField.propTypes = {
  rendered: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default ResultField;
