import React, { Component, Fragment, Suspense, lazy } from "react";

import { Header } from "./layouts";
import "./App.css";

const Influencers = lazy(() => import("./influencers/Influencers"));

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="app__content">
          <Suspense fallback={<div>Loading...</div>}>
            <Influencers />
          </Suspense>
        </div>
      </Fragment>
    );
  }
}

export default App;
