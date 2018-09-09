import React, { Component } from 'react';

class WorkoutCard extends Component {
    render() {
        const { workout } = this.props
        console.log(workout)
        return(
            <div>
                <p>Work out card!</p>
                Name: {workout.name}
            </div>
        )
    }
}

export default WorkoutCard;