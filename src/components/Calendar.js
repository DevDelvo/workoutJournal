import React, { Component } from 'react';
import Calendar from 'react-calendar';

class liftingCalendar extends Component {
    state = {
        date: new Date(),
    }

    onchange = date => {
        this.setState({ date })
    }

    render() {
        return (
            <div>
                <Calendar
                    onchange={this.onChange}
                    value={this.state.date}
                />
            </div>
        )
    }
}

export default liftingCalendar
