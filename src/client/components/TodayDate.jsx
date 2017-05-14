import React from 'react';
import {
    Button
} from 'reactstrap';

import TodayNextEvent from 'components/TodayNextEvent.jsx';

import './TodayDate.css';

export default class TodayDate extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='today-date'>
                    <div className='todays-date'>{this.props.todaysDate.month}&nbsp;{this.props.todaysDate.date},&nbsp;&nbsp;{this.props.todaysDate.year}</div>
                    <div className='today-week-of-the-day'>{this.props.todaysDate.day}</div>
            </div>
        );
    }

}
