import React from 'react';


import FontAwesome from 'react-fontawesome';

import './CalendarMonth.css';


export default class CalendarMonthDay extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
          <div className='day col'>
            <div className='vertical-center-parent not-this-month' style={{padding: 0}}>
              <div className='vertical-center-child'>
                <div className=''>{this.props.date}</div>
              </div>
            </div>
          </div>
        );
    }

}
