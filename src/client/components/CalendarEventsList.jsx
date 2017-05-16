import React from 'react';
import {
  Button,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import CalendarEventItem from 'components/CalendarEventItem.jsx';

import './CalendarEventList.css';

export default class CalendarEventsList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        {/*const {events} = this.props;*/}

        let event = {
            title: 'SS project QQ',
            time: '3:00AM - 6:30AM',
            location: 'Shu Dormitory'
        };
        let events ={event,event,event};
        let children = (
            <ListGroupItem className='empty d-flex justify-content-center align-items-center'>
                <div className='empty-text'>No Events. Time to relax!</div>
            </ListGroupItem>
        );
        if (events.length) {
            children = events.map(e => (
                  <CalendarEventItem {...e}/>
            ));
        }

        return (
            <div className='calendar-events-list'>
                {children}
            </div>
        );
    }

}
