import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Calendar from './components/Calendar';
import { LogIn } from './components/LogIn';
import RoutineDay from './components/RoutineDay'
import { WorkoutPage } from './components/workoutComponents'

class Routes extends Component {
 
    render() {
        return (

                <Switch>
                    <Route exact path="/login" component={LogIn} />
                    {/* <Route exact path="/home" component={Home} /> */}
                    <Route path="/calendar" component={Calendar} />
                    <Route path="/workouts" component={WorkoutPage} />
                    <Route path="/routine/:date" component={RoutineDay} />
                </Switch>
       
        )
    }
}

export default Routes