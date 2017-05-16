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
                <div className='col-4'>{this.props.title}</div>
                <div className='col-4 event-time'><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;{this.props.time}</div>
                <div className='col-4 event-location'><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;{this.props.location}</div>
                </div>
            </div>
        );
    }

}
