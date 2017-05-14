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
              <div className='map'>
                <img src='/images/dark-map-example.jpg' className='col map-img' style={{padding: 0}}></img>
              </div>
            </div>
        );
    }

}
