import React from 'react';
import {
    Button
} from 'reactstrap';

import './CalendarEventItem.css';

export default class CalendarEventItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='calendar-event-item'>
                <div className='row'>
                <div className='col-6'>This is a event</div>
                <div className='col-3'>Time</div>
                <div className='col-3'>Location</div>
                </div>
            </div>
        );
    }

}
