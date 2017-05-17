import React from 'react';
import {connect} from 'react-redux';
import {
    Button
} from 'reactstrap';
import moment from 'moment';
import CalendarMonthDay from './CalendarMonthDay.jsx'

import FontAwesome from 'react-fontawesome';
import {setMonth, setYear, updateMonthNumbers} from 'states/calendar-actions.js'
import './CalendarMonth.css';


class TestCalendarMonth extends React.Component {
    constructor(props) {
        super(props);
        this.calendarBody = this.calendarBody.bind(this);
        this.monthToString = this.monthToString.bind(this);

    }

    componentWillMount(){
        this.props.dispatch(updateMonthNumbers(this.props.year, this.props.month, this.props.day, this.props.todaysDate.month()));
    }
    calendarBody(){
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
      let maxWeek = 6;
      let m = moment({
          year: this.props.year,
          month: this.props.month-1,
          date: 1
      });
      if(m.day()+m.daysInMonth()-1 < 35){
        maxWeek = 5;
      }

      for(let i=0; i<maxWeek; i++){
        for(let j=0; j<7; j++){
            week[i].push(<CalendarMonthDay key={i*7+j} cellNum={i*7+j} {...this.props.monthNumbers[i*7+j]}/>);
        }
      }
      for(let i=0; i<maxWeek; i++){
          month.push(<div className='week row' key={i+42}>{week[i]}</div>);
      }
      return month;
    }

    render() {
        return (
            <div className='calendar-month'>
                <div className='calendar-header container-fluid'>
                  <div className='month-select row justify-content-center'>
                    <Button className='month-select-button btn' onClick={() => this.onLastMonthClick()}><i className='fa fa-angle-left fa-2x' aria-hidden="true"></i></Button>
                    <div className='vertical-center-parent current-month col-6'>
                        <div className='vertical-center-child'>{this.monthToString()}&nbsp;&nbsp;{this.props.year}</div>
                    </div>
                    <Button className='month-select-button' onClick={() => this.onNextMonthClick()}><i className='fa fa-angle-right fa-2x' aria-hidden="true"></i></Button>
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
                  {this.calendarBody()}
                </div>
            </div>
        );
    }
    monthToString(){
      let t = moment({month: this.props.month-1});
      return t.format('MMMM')
    }
    onLastMonthClick(){
        if(this.props.month <= 1){
            this.props.dispatch(setMonth(12));
            this.props.dispatch(setYear(this.props.year-1));
        }else{
            this.props.dispatch(setMonth(this.props.month-1));
        }
    }

    onNextMonthClick(){
        if(this.props.month >= 12){
            this.props.dispatch(setMonth(1));
            this.props.dispatch(setYear(this.props.year+1));
        }else{
            this.props.dispatch(setMonth(this.props.month+1));
        }
    }

}

export default connect((state) => {
    return {
        ...state.calendar,
        ...state.main
    };
})(TestCalendarMonth);
