import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
//components
import Home from "./components/routingPage/Home";
import Users from "./components/routingPage/Users";
import NotFound from "./components/routingPage/NotFound";
import User_1 from "./components/routingPage/User_1";
import TodoList from "./components/todo_List";
import Main from "./components/context/Main";
import Initial from "./components/error_boundy/Initial";
import RefDemo from "./components/ref/RefDemo";
import FocusInput from "./components/ref/ref_In_Component/FocusInput";
import DesCounterClick from "./components/higher_Order_Component/DesCounterClick";
import DesCounterHover from "./components/higher_Order_Component/DesCounterHover";
import MainHoc from "./components/higher_Order_Component/Main";

class App extends Component {
  render() {
    return (
      <Router>
        {/* <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/user"> Users</Link>
          </li>
        </ul> */}
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={MainHoc} />
          <Route exact path="/user" component={Users} />
          {/* in :id ro mishe to componentesh daryaft krd */}
          <Route exact path="/user/:id" component={User_1} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
