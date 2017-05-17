import React from 'react';
import {Button} from 'reactstrap';

import './CalendarEventItem.css';
import moment from 'moment';

export default class CalendarEventItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);


    }
    handleDelete(){

    }
    render() {
        let color = '#d6d7da';
        let startTime = moment(this.props.startTs).format('LT');
        let endTime = moment(this.props.endTs).format('LT');
        var labelColor={borderColor: color};

        return (
            <div className='calendar-event-item' style={labelColor}>
                <div className='row'>
                    <div className='col-5'>{this.props.title}</div>
                    <div className='col-3 event-time'>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;{startTime}
                    </div>
                    <div className='col-3 event-location'>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;{this.props.location}
                    </div>
                    <div className='col-1 delete-event'>
                        <i className='delete-button fa fa-times' onclick={this.handleDelete}></i>
                    </div>


                </div>
            </div>
        );
    }

}
