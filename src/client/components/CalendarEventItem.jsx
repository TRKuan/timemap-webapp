import React from 'react';
import {Button} from 'reactstrap';

import './CalendarEventItem.css';
import moment from 'moment';

export default class CalendarEventItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let color = '#d6d7da';
        let startTime = moment(this.props.startTs).format('LT');
        let endTime = moment(this.props.endTs).format('LT');
        var labelColor={borderColor: color};

        return (
            <div className='calendar-event-item' style={labelColor}>
                <div className='row'>
                    <div className='col-4'>{this.props.title}</div>
                    <div className='col-4 event-time'>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;{startTime}
                        - {endTime}</div>
                    <div className='col-4 event-location'>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;{this.props.location}</div>
                </div>
            </div>
        );
    }

}
