import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <a className="navbar-brand" href="/">
        鳥居(Torii) β
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-content"
        aria-controls="navbar-content"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar-content">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbar-information"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Information</a>
            <div className="dropdown-menu" aria-labelledby="navbar-information">
              <a
                className="dropdown-item"
                href="https://docs.python.jp/3.6/"
                target="_blank"
                rel="noopener noreferrer"
              >Python version: 3.6</a>
              <a
                className="dropdown-item"
                href="http://jinja.pocoo.org/docs/2.10/"
                target="_blank"
                rel="noopener noreferrer"
              >Jinja2 version: 2.10</a>
              <a
                className="dropdown-item"
                href="https://twitter.com/shirakiya831"
                target="_blank"
                rel="noopener noreferrer"
              >Maintainer</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

NavBar.propTypes = {};

export default NavBar;
