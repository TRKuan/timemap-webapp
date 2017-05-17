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

    componentWillMount(){
        this.props.dispatch(getDayEvents());
    }

    render() {
        const events = this.props.dayEvents;
        /*
        let event1 = {
            id : 1,
            title: 'Event 1',
            time: '3:00AM - 6:30AM',
            startTs: moment(),
            endTs: moment(),
            location: 'Shu Dormitory'
        };
        let event2 = {
            id : 2,
            title: 'Event 2',
            time: '3:00AM - 6:30AM',
            startTs: moment(),
            endTs: moment(),
            location: 'Shu Dormitory'
        }
        let event3 = {
            id : 3,
            title: 'SS project QQ',
            time: '3:00AM - 6:30AM',
            startTs: moment(),
            endTs: moment(),
            location: 'Shu Dormitory'
        }
        let events =[event1,event2,event3];
        */
        let children = (
            <ListGroupItem className='empty d-flex justify-content-center align-items-center'>
                <div className='empty-text'>No Events. Time to relax!</div>
            </ListGroupItem>
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
