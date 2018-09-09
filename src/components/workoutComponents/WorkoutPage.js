import React, { Component } from 'react'
import WorkoutCard from './index'
import workouts from '../../DUMMYDATA/workouts'


class WorkoutPage extends Component {
    constructor() {
        super() 
        this.state = {
            workouts: [],
        }
    }

    componentDidMount() {
        this.setState({workouts})
    }
    
    render() {
        return (
            <div>
                Workout Page!
            </div>
        )
    }
}

export default WorkoutPage;