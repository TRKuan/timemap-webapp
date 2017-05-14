import React from 'react';
import {
    Button
} from 'reactstrap';

import TodayNextEvent from 'components/TodayNextEvent.jsx';
import TodayDate from 'components/TodayDate.jsx';

import './TodayDisplay.css';

export default class TodayDisplay extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='today-display'>
                <TodayDate/>
                <TodayNextEvent/>
            </div>
        );
    }

}
