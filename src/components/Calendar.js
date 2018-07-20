import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import CalendarDay from './CalendarDay'
import events from '../events'

import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'

localizer(globalize)

import('react-big-calendar/lib/css/react-big-calendar.css')

class Rendering extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <BigCalendar
                style={{height: '420px'}}
                events={[]}
            />
        )
    }
}

export default Rendering