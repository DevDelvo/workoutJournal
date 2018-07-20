import React, { Component } from 'react'

class RoutineDay extends Component {
    state = {
        date: '',
        workOuts: []
    }

    render() {
        const date = this.props.date
        return (
            <div>
                List of routines for the day!
            </div>
        )
    }
}

export default RoutineDay