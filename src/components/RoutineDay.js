import React, { Component } from 'react'

class RoutineDay extends Component {
    state = {
        id: 0,
        title: '',
        start: '',
        end: '',
        desc: '',
        workouts: {},
    }

    componentDidMount() {
        const { id, start, end, title, workouts } = this.props.location.state.event
        this.setState({
            id, title, start, end, workouts
        })
    }

    render() {
        const { id, start, end, title, workouts } = this.state;
        const { squat, bench, deadlift } = workouts;
        console.log(this.state)
        return (
            <div>
                {
                    workouts !== {} ? squat : 'Loading'
                    // start !== '' ? start.getDate() : 'Loading'
                }
            </div>
        )
    }
}

export default RoutineDay