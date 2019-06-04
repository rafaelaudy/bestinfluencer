import React, { Component, Fragment } from "react";

import { Header, Footer } from "./layouts";
import Influencers from "./influencers/Influencers";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Influencers />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
