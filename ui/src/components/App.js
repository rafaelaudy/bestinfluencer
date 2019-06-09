import React, { Component, Fragment } from "react";

import { Header, Footer } from "./layouts";
import Influencers from "./influencers/Influencers";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="app__content">
          <Influencers />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
