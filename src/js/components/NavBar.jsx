import React from 'react';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src="/images/torii_512.png" alt="torii-logo" width="30" height="30" />
        Torii(鳥居) β
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
                href="https://docs.python.jp/3.8/"
                target="_blank"
                rel="noopener noreferrer"
              >Python version: 3.8</a>
              <a
                className="dropdown-item"
                href="https://jinja.palletsprojects.com/en/2.10.x/"
                target="_blank"
                rel="noopener noreferrer"
              >Jinja2 version: 2.11</a>
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
