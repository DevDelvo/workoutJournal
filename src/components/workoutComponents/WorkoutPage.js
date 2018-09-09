import React, { Component } from 'react'
import WorkoutCard from './WorkoutCard'
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
        const { workouts } = this.state
        return (
            <div>
                Workouts:
                {
                    workouts.map(workout => <WorkoutCard workout={workout}/>)
                }
            </div>
        )
    }
}

export default WorkoutPage;