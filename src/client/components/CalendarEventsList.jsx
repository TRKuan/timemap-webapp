import React from 'react';
import {
  Button,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import {connect} from 'react-redux';
import moment from 'moment';

import CalendarEventItem from 'components/CalendarEventItem.jsx';
import {getDayEvents} from 'states/calendar-actions';

import './CalendarEventList.css';

class CalendarEventsList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const events = this.props.dayEvents;
        let children = (
            <div className='empty d-flex justify-content-center align-items-center'>
                <div className='empty-text'>No Events. Time to relax!</div>
            </div>
        );
        if(events){
            if (events.length) {
                children = events.map((e, i) => (
                      <CalendarEventItem key={i} {...e}/>
                ));
            }
        }

        return (
            <div className='calendar-events-list'>
                {children}
            </div>
        );
    }

}
export default connect(state => ({
    dayEvents: state.calendar.dayEvents
}))(CalendarEventsList);
