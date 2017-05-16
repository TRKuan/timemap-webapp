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

    }

    componentWillMount(){
        this.props.dispatch(updateMonthNumbers(this.props.year, this.props.month));
    }

    render() {
        let tempPickedDay = {date: 1, isThisMonth: false, isToday: false, isPickedDay: true, hasEvent: false};
        let tempTodayDay = {date: 2, isThisMonth: false, isToday: true, isPickedDay: false, hasEvent: false};
        let monthNumbers = [tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay,
                            tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay,
                            tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay,
                            tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay,
                            tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay,
                            tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay, tempPickedDay,
                            tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay, tempTodayDay
                          ]
        
        let monthWeek = (
          <div className='week row'>
              <CalendarMonthDay date='8'/>
              <CalendarMonthDay date='7'/>
              <CalendarMonthDay date='6'/>
              <CalendarMonthDay date='5'/>
              <CalendarMonthDay date='4'/>
              <CalendarMonthDay date='4'/>
              <CalendarMonthDay date='2'/>
              <CalendarMonthDay date='1'/>
          </div>
        )
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
                  <div className='week row'>
                      <CalendarMonthDay date='8'/>
                      <CalendarMonthDay date='7'/>
                      <CalendarMonthDay date='6'/>
                      <CalendarMonthDay date='5'/>
                      <CalendarMonthDay date='4'/>
                      <CalendarMonthDay date='4'/>
                      <CalendarMonthDay date='2'/>
                      <CalendarMonthDay date='1'/>
                  </div>
                  <div className='week row'>
                      <CalendarMonthDay date='8'/>
                      <CalendarMonthDay date='7'/>
                      <CalendarMonthDay date='6'/>
                      <CalendarMonthDay date='5'/>
                      <CalendarMonthDay date='4'/>
                      <CalendarMonthDay date='4'/>
                      <CalendarMonthDay date='2'/>
                      <CalendarMonthDay date='1'/>
                  </div>
                  <div className='week row'>
                      <CalendarMonthDay date='8'/>
                      <CalendarMonthDay date='7'/>
                      <CalendarMonthDay date='6'/>
                      <CalendarMonthDay date='5'/>
                      <CalendarMonthDay date='4'/>
                      <CalendarMonthDay date='4'/>
                      <CalendarMonthDay date='2'/>
                      <CalendarMonthDay date='1'/>
                  </div>
                  <div className='week row'>
                      <CalendarMonthDay date='8'/>
                      <CalendarMonthDay date='7'/>
                      <CalendarMonthDay date='6'/>
                      <CalendarMonthDay date='5'/>
                      <CalendarMonthDay date='4'/>
                      <CalendarMonthDay date='4'/>
                      <CalendarMonthDay date='2'/>
                      <CalendarMonthDay date='1'/>
                  </div>
                  <div className='week row'>
                      <CalendarMonthDay date='8'/>
                      <CalendarMonthDay date='7'/>
                      <CalendarMonthDay date='6'/>
                      <CalendarMonthDay date='5'/>
                      <CalendarMonthDay date='4'/>
                      <CalendarMonthDay date='4'/>
                      <CalendarMonthDay date='2'/>
                      <CalendarMonthDay date='1'/>
                  </div>
                  <div className='week row'>
                      <CalendarMonthDay date='8'/>
                      <CalendarMonthDay date='7'/>
                      <CalendarMonthDay date='6'/>
                      <CalendarMonthDay date='5'/>
                      <CalendarMonthDay date='4'/>
                      <CalendarMonthDay date='4'/>
                      <CalendarMonthDay date='2'/>
                      <CalendarMonthDay date='1'/>
                  </div>
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
