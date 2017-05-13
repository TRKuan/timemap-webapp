import React from 'react';
import {
    Button
} from 'reactstrap';


export default class TodayNextEvent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='today-next-event'>
                <div>Next Event</div>
                <div className='next-event'>
                    <div className='event-title event-label'>Lunch with Tiffany</div>
                    <div className='leave-time'>Leave in 15 mins</div>
                    <div className='event-time'>12:00AM - 1:00PM</div>
                    <div className='event-location'>Smile Cafe</div>
                </div>
            </div>

        );
    }

}
