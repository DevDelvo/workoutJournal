import React, { Component } from 'react'

class CalendarDay extends Component {
    state = {
        date: new Date()
    }

    render() {
        const date = this.props.date
        return (
            <div>
                hi!
            </div>
        )
    }
}

export default CalendarDay