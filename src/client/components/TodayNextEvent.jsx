import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
    Button
} from 'reactstrap';

import {connect} from 'react-redux';
import {getNextEvent} from 'states/calendar-actions.js';

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
    }
    componentWillMount(){
        this.props.dispatch(getNextEvent());
    }
    render() {
        return (
            <div className='today-next-event'>
                <div className='next-event-header'><i className='fa fa-bullseye fa-1x' aria-hidden="true"></i>Next Event</div>
                <div className='next-event'>
                    <div className='event-title event-label'>{this.props.title}</div>
                    <div className='leave-time'><i className='fa fa-bell-o fa-1x ' aria-hidden="true"></i>Leave in {(moment(this.props.startTs).unix()-moment().unix()-this.props.duration)/60} min(s)</div>
                    <div className='event-time'><i className='fa fa-clock-o fa-1x ' aria-hidden="true"></i>{this.props.startTs}</div>
                    <div className='event-location'><i className='fa fa-map-marker fa-1x ' aria-hidden="true"></i>{this.props.location}</div>
                </div>
            </div>

        );
    }

}
export default connect(state => ({
    ...state.calendar.nextEvent
}))(TodayNextEvent);
