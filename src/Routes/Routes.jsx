import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "../Screen/About/Nosotros";
import JoinIn from "../Screen/JoinIn/Join";
import Home from "../App";
import history from './History';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={JoinIn} />
                </Switch>
            </Router>
        )
    }
}