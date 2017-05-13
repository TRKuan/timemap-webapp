import React from 'react';
import {
    Button
} from 'reactstrap';

import TodayNextEvent from 'components/TodayNextEvent.jsx';

import './TodayDisplay.css';

export default class TodayDisplay extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='today-display'>
                <div className='todays-date'>
                    <div className='today-date'>December 26, 2017</div>
                    <div className='today-week-of-the-day'>Tuesday</div>
                </div>
                <TodayNextEvent/>
                <div className='condition container-fluid d-flex align-items-center justify-content-center'>
                  <div>
                      <img src='/images/color-runer-silhouette-running-fast.png' className='condition-icon'></img>
                  </div>
                </div>
            </div>
        );
    }

}
