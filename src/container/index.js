import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInfo from "../component/userInfo.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={UserInfo} exact={true} />
        </Switch>
      </Router>
    );
  }
}

export default App;