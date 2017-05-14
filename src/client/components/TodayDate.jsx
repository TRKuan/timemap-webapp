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
                    <div className='todays-date'>December 26, 2017</div>
                    <div className='today-week-of-the-day'>Tuesday</div>
            </div>
        );
    }

}
