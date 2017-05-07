import React from 'react';
import {connect} from 'react-redux';
import EventForm from 'components/EventForm.jsx';
import Map from 'components/Map.jsx';
import {setTransportation} from 'states/calendar-actions.js';

import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(setTransportation('wlaking'));
    }

    render() {
        const {events} = this.props;
        return (
            <div className="main">
              <EventForm />
              {events.map((event, i) => <p key={`event${i}`}>{`${event.title} | Time: ${event.date.format('MMM Do YYYY, h:mm:ss a')} | ${event.geolocation}`}</p>)}
              <Map />
            </div>
        );
    }
}

export default connect((state) => {
    return {
        ...state.calendar
    };
})(Main);
