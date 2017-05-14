import React from 'react';
import {
    Button
} from 'reactstrap';

import './TodayNextEvent.css';

export default class TodayNextEvent extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className='today-next-event'>
                <div className='next-event-header'><i className='fa fa-bullseye fa-1x' aria-hidden="true"></i>Next Event</div>
                <div className='next-event'>
                    <div className='event-title event-label'>Lunch with Tiffany</div>
                    <div className='leave-time'><i className='fa fa-bell-o fa-1x ' aria-hidden="true"></i>Leave in 15 mins</div>
                    <div className='event-time'><i className='fa fa-clock-o fa-1x ' aria-hidden="true"></i>12:00AM - 1:00PM</div>
                    <div className='event-location'><i className='fa fa-map-marker fa-1x ' aria-hidden="true"></i>Smile Cafe</div>
                </div>
            </div>

        );
    }

}
