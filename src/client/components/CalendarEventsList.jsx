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
        }
        let children = (
            <ListGroupItem className='empty d-flex justify-content-center align-items-center'>
                <div className='empty-text'>No events.<br/>Go add some events.</div>
            </ListGroupItem>
        );
        if (0) {
            children = events.map(p => (
                <ListGroupItem key={e.id} action>
                    <CalendarEventItem {...e}/>
                </ListGroupItem>
            ));
        }

        return (
            <div className='calendar-events-list'>
                <CalendarEventItem {...event}/>

            </div>
        );
    }

}
