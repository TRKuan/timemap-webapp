import React from 'react';
import {
    Button
} from 'reactstrap';
import moment from 'moment';

import TodayNextEvent from 'components/TodayNextEvent.jsx';

import './TodayDate.css';

export default class TodayDate extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='today-date'>
                    <div className='todays-date'>{this.props.todaysDate.format('MMMM')}&nbsp;{this.props.todaysDate.format('D')},&nbsp;&nbsp;{this.props.todaysDate.format('YYYY')}</div>
                    <div className='today-week-of-the-day'>{this.props.todaysDate.format('dddd')}</div>
            </div>
        );
    }

}
