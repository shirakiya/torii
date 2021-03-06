import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions.js';
import NavBar from './components/NavBar.jsx';
import InputField from './components/InputField.jsx';
import ResultField from './components/ResultField.jsx';


const App = ({ template, system, error, ...other }) => {
  return (
    <div id="main">
      <NavBar />
      <div className="container">
        <div id="top-message">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">What&rsquo;s Torii?</h5>
              Torii(鳥居) is the testing tool for Jinja2. You can test or use Jinja2 by trial with Torii.
            </div>
          </div>
        </div>
        <InputField
          statement={template.statement}
          context={template.context}
          inSubmit={system.inCallingAPI}
          errorType={error.type}
          {...other}
        />
        <hr />
        <ResultField
          rendered={template.rendered}
          errorMessage={error.message}
        />
      </div>
    </div>
  );
};

App.propTypes = {
  template: PropTypes.object.isRequired,
  system: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
