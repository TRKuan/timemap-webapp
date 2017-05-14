import React from 'react';
import {
    Button
} from 'reactstrap';

import TodayDisplay from 'components/TodayDisplay.jsx';
import TodayLocation from 'components/TodayLocation.jsx';

import './TodayPanel.css';

export default class TodayPanel extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='today-panel'>
              <div className='row'>
                <div className='col-12 col-sm-5' style={{padding: 0}}>
                  <TodayDisplay todaysDate={this.props.todaysDate}/>
                </div>
                <div className='col-12 col-sm-7' style={{padding: 0}}>
                  <TodayLocation/>
                </div>
              </div>
            </div>
        );
    }

}
