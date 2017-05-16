import React from 'react';
import {
    Button
} from 'reactstrap';
import Map from 'components/Map.jsx';
import './TodayLocation.css';

export default class TodayLocation extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='today-location'>
              <Map id="todayMap" pinnable={false}/>
            </div>
        );
    }

}
