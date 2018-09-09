import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events'
import { getRoutinePath } from './routeConstants'
// import { getEvents } from '../gCal'

import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'

localizer(globalize)

import('react-big-calendar/lib/css/react-big-calendar.css')

class Rendering extends Component {
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

    routineRedirect = (event) => {

        const date = `${event.start.getFullYear()}-${event.start.getMonth() + 1}-${event.start.getDate()}`
        this.props.history.push({
            pathname: getRoutinePath(date),
            state: { event }
    })
    }
    
    render() {
        // console.log(this.state.events)
        return (
            <BigCalendar
                style={{height: '850px'}}
                selectable
                events={this.state.events}
                defaultView={BigCalendar.Views.WEEK}
                // scrollToTime={new Date(1970, 1, 1, 6)}
                // defaultDate={new Date(2015, 3, 12)}
                onSelectEvent={
                    event => 
                    // alert(
                    // `Event: ${event.title}` +
                    // `\nStart: ${event.start}` +
                    // `\nEnd: ${event.end}` +
                    // `\nDescription: ${event.desc}`
                    // )
                    this.routineRedirect(event)
                }
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