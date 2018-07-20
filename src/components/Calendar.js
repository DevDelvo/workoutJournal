import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import CalendarDay from './CalendarDay'
import events from '../events'
// import { getEvents } from '../gCal'

import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'

localizer(globalize)

import('react-big-calendar/lib/css/react-big-calendar.css')

class Rendering extends React.Component {
    constructor() {
        super()
        this.state = {
            events: []
        }
    }

    componentDidMount () {
        // getEvents((events) => {
        //     this.setState({events})
        // })
        this.setState({events})
    }

    render() {
        console.log(this.state.events)
        return (
            <BigCalendar
                style={{height: '420px'}}
                // events={this.state.events}
                selectable
                events={this.state.events}
                defaultView={BigCalendar.Views.WEEK}
                // scrollToTime={new Date(1970, 1, 1, 6)}
                // defaultDate={new Date(2015, 3, 12)}
                onSelectEvent={event => alert(event.title)}
                onSelectSlot={slotInfo =>
                    alert(
                    `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                    `\nend: ${slotInfo.end.toLocaleString()}` +
                    `\naction: ${slotInfo.action}`
                    )
                }
            />
        )
    }
}

export default Rendering