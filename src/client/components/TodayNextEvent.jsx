import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
    Button
} from 'reactstrap';
import { notification, Icon } from 'antd';

import {connect} from 'react-redux';
import {getNextEvent, setBackground, setNotify} from 'states/calendar-actions.js';

import './TodayNextEvent.css';


class TodayNextEvent extends React.Component {
    static propTypes = {
        timeLeft: PropTypes.number,
        label: PropTypes.string,
        title: PropTypes.string,
        time: PropTypes.string,
        location: PropTypes.string,
        dispatch: PropTypes.func
    };
    constructor(props) {
        super(props);
        this.checkLeaveTime = this.checkLeaveTime.bind(this);
        this.openNotification - this.openNotification.bind(this);
        this.state={notified:false};
    }

    openNotification(){
      notification.open({
        message: 'Time to LEAVE!!!',
        description: 'You are going to be late, leave right now!',

        icon: <Icon type="exclamation" style={{ color: '#e22558' }}/>
      });
    };
    checkLeaveTime(){
      console.log(this.props.nextEvent.distance);
      if(this.props.leaveTime < 0 && this.props.nextEvent.distance > 100){

        if(!this.props.notified){
          this.openNotification();
          this.props.dispatch(setNotify(true));
        }
        this.props.dispatch(setBackground('normal-back'));
        setTimeout(()=>this.props.dispatch(setBackground('alert-leave')), 100);
      }else{
        this.props.dispatch(setBackground('still-ok'));
        this.props.dispatch(setNotify(false));
        console.log(this.props.leaveTime , this.props.nextEvent.distance);
      }
    }
    componentDidMount(){
      setInterval(this.checkLeaveTime, 1000);
    }

    render() {
        return (
            <div className={`today-next-event ${this.props.nextBack}`}>
                <div className='next-event-header'><i className='fa fa-bullseye fa-1x' aria-hidden="true"></i>Next Event</div>
                <div className='next-event'>
                    <div className='event-title event-label'>{this.props.title}</div>
                    <div className='leave-time'><i className='fa fa-bell-o fa-1x ' aria-hidden="true"></i>Should leave {moment.duration(this.props.leaveTime, 'seconds').humanize(true)}</div>
                    <div className='event-time'><i className='fa fa-clock-o fa-1x ' aria-hidden="true"></i>{moment(this.props.startTs).format('MMM D, YYYY')}</div>
                    <div className='event-location'><i className='fa fa-map-marker fa-1x ' aria-hidden="true"></i>{this.props.location}</div>
                </div>
            </div>

        );
    }

}
export default connect(state => ({
    ...state.calendar.nextEvent,
    ...state.calendar
}))(TodayNextEvent);
