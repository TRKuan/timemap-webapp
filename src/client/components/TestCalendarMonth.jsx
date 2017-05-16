import React from 'react';
import {connect} from 'react-redux';
import {
    Button
} from 'reactstrap';

import CalendarMonthDay from './CalendarMonthDay.jsx'

import FontAwesome from 'react-fontawesome';
import {updateMonthNumbers} from 'states/calendar-actions.js'
import './CalendarMonth.css';


class TestCalendarMonth extends React.Component {
    constructor(props) {
        super(props);
        this.updateCalendarMonth = this.updateCalendarMonth.bind(this);

    }

    componentWillMount(){
        this.props.dispatch(updateMonthNumbers(this.props.year, this.props.month));
    }
    updateCalendarMonth(){
      let tempPickedDay = {date: 1, notThisMonth: false, isToday: false, isPickedDay: false, hasEvent: true};
      let tempTodayDay = {date: 2, notThisMonth: true, isToday: false, isPickedDay: false, hasEvent: true};
      let monthNumbers = [tempTodayDay, tempPickedDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay,
                          tempTodayDay, tempPickedDay, tempTodayDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay,
                          tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay,
                          tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay,
                          tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay,
                          tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay,
                          tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay
                        ]
      let week = [[],[],[],[],[],[],[]];
      let month = [];
      for(let i=0; i<6; i++){
        for(let j=0; j<7; j++){
            week[i].push(<CalendarMonthDay key={i*7+j} num={this.props.monthNumbers[i*7+j]?this.props.monthNumbers[i*7+j]:""} {...monthNumbers[i*7+j]}/>);
        }
      }
      for(let i=0; i<6; i++){
          month.push(<div className='week row' key={i+42}>{week[i]}</div>);
      }
      return month;
    }

    render() {
        return (
            <div className='calendar-month'>
                <div className='calendar-header container-fluid'>
                  <div className='month-select row justify-content-center'>
                    <Button className='month-select-button btn'><i className='fa fa-angle-left fa-2x' aria-hidden="true"></i></Button>
                    <div className='vertical-center-parent current-month col-6'>
                        <div className='vertical-center-child'>DECEMBER&nbsp;&nbsp;2017</div>
                    </div>
                    <Button className='month-select-button'><i className='fa fa-angle-right fa-2x' aria-hidden="true"></i></Button>
                  </div>
                  <div className='days-of-the-week row'>
                      <div className='col' style={{padding: 0}}>SUN</div>
                      <div className='col' style={{padding: 0}}>MON</div>
                      <div className='col' style={{padding: 0}}>TUE</div>
                      <div className='col' style={{padding: 0}}>WED</div>
                      <div className='col' style={{padding: 0}}>THU</div>
                      <div className='col' style={{padding: 0}}>FRE</div>
                      <div className='col' style={{padding: 0}}>SAT</div>
                  </div>
                </div>
                <div className='calendar-body container-fluid'>
                  {this.updateCalendarMonth()}
                </div>
            </div>
        );
    }

}

export default connect((state) => {
    return {
        ...state.calendar
    };
})(TestCalendarMonth);
