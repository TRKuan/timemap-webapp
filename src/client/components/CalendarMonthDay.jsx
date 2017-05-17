import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import {setDay} from 'states/calendar-actions.js'

import {datePicked} from 'states/calendar-actions.js'

import './CalendarMonth.css';


class CalendarMonthDay extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        const notThisMonth = this.props.notThisMonth ? 'not-this-month' : '';
        const currentDay = this.props.isToday ? 'current-day' : '';
        const pickedDay = this.props.isPickedDay ? 'picked-day' : '';
        let hasEvent = '';
        if(this.props.hasEvent && !this.props.notThisMonth){
            if(this.props.isToday){
                hasEvent = 'has-event-current';
            }
            else if(this.props.isPickedDay){
                hasEvent = 'has-event-picked';
            }else{
              hasEvent ='has-event-others';
            }
        }else{
          hasEvent = '';
        }
        return (
          <div className={`day col ${currentDay} ${pickedDay}`} onClick={this.onClick}>
            <div className={`vertical-center-parent ${notThisMonth}`} style={{padding: 0}}>
              <div className='vertical-center-child'>
                <div className={hasEvent}>{this.props.date}</div>
              </div>
            </div>
          </div>
        );
    }
    onClick(e){
      if(!this.props.notThisMonth && !this.props.isPickedDay){
        console.log(this.props.cellNum);
        let m = moment({
            year: this.props.year,
            month: this.props.month-1,
            day: this.props.cellNum
        });
        this.props.dispatch(setDay(m));
      }

    }

}
export default connect((state) => {
    return {
        ...state.calendar
    };
})(CalendarMonthDay);
