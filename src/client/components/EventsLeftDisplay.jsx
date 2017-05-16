import React from 'react';
import Map from 'components/Map.jsx';

import './EventsLeftDisplay.css';

export default class EventsLeftDisplay extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
          <div className='events-left-display'>
              <div className='new-event-header'>New Event</div>
              <Map id="eventMap" pinnable={true}/>
          </div>
        );
    }

}
