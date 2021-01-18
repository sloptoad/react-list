import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CreateCustomer from "./components/CreateCustomer";
import EditCustomer from "./components/EditCustomer";

function App() {
  return (<Router>
    <div className="App">
      <header className="ui header">
        <h2>Customer List App</h2>
      </header>

      <div className="ui raised  padded text container segment">
        <div>
          <div className="center">
            <div className="wrapper center">
              <Switch>
                <Route exact path='/' component={CreateCustomer} />
                <Route path="/create-customer" component={CreateCustomer} />
                <Route path="/edit-customer/:id" component={EditCustomer} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Router>);
}

export default App;