import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import CalendarDay from './CalendarDay'
import events from '../events'

import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'

localizer(globalize)

function Event({ event }) {
    return (
        <span>
            <strong>{event.title}</strong>
            {event.desc && ': ' + event.desc}
        </span>
    )
}

function EventAgenda( { event }) {
    return (
        <span>
            <em style={{ color: 'magenta '}}>{event.title}</em>
            <p>{event.desc}</p>
        </span>
    )
}

const customDayPropGetter = date => {
    if (date.getDate() === 7 || date.getDate() === 15)
        return {
            className: 'special-day',
            style: {
                border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
            },
        }
    else return {}
}

const customSlotPropGetter = date => {
    if (date.getDate() === 7 || date.getDate() === 15)
        return {
            className: 'special-day',
        }
    else return {}
}

let Rendering = () => (
    <div className="calendar">
    <h1>Calendar</h1>
    <BigCalendar
        events={events}
        defaultDate={new Date(2018, 7, 1)}
        defaultView={BigCalendar.Views.AGENDA}
        dayPropGetter={customDayPropGetter}
        slotPropGetter={customSlotPropGetter}
        components={{
            event: Event,
            agenda: {
                event: EventAgenda
            }
        }}
    />
    </div>
)

export default Rendering
