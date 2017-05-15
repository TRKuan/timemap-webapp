import React from 'react';




import './EventsLeftDisplay.css';

export default class EventsLeftDisplay extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
          <div className='events-left-display'>
              <div className='new-event-header'>New Event</div>
              <div className='map'>
                <img src='/images/dark-map-example.jpg' className='col map-img' style={{padding: 0}}></img>
              </div>
          </div>
        );
    }

}
