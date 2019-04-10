import React, { Component } from "react";
import "./Layout.css";

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <header className="Layout-header">
          <p>
            Edit <code>src/Layout.js</code> and save to reload.
          </p>
          <a
            className="Layout-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Layout;
