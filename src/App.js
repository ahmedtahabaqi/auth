import React, { Component } from "react";
import Context from "./component/context.js";

import SignIn from "./component/signin";
import SignUp from "./component/signup";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Context.Provider value={{ value: this.state.profile }}>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Context.Provider>
      </BrowserRouter>
    );
  }
}
export default App;
