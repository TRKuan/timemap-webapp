import React from 'react';
import {
    Button
} from 'reactstrap';

import './TodayLocation.css';

export default class TodayLocation extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='today-location'>
                <div>Your Location</div>
                <div className='map container-fluid d-flex align-items-center justify-content-center'>
                    <img src='/images/mapbox-example.jpg' className='condition-icon'></img>
                </div>
            </div>
        );
    }

}
