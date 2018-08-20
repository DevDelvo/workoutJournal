import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calendar from './components/Calendar';
import { LogIn } from './components/LogIn';
import RoutineDay from './components/RoutineDay'

class Routes extends Component {
 
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={LogIn} />
                    {/* <Route exact path="/home" component={Home} /> */}
                    <Route path="/calendar" component={Calendar} />
                    <Route path="/routine" component={RoutineDay} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes