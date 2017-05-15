import React from 'react';



import EventsLeftDisplay from 'components/EventsLeftDisplay.jsx';
import EventsRightDisplay from 'components/EventsRightDisplay.jsx';


import './EventsPanel.css';

export default class EventsPanel extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
          <div className='events-panel'>
            <div className='row'>
              <div className='col-12 col-sm-6' style={{padding: 0}}>
                <EventsLeftDisplay/>
              </div>
              <div className='col-12 col-sm-6' style={{padding: 0}}>
                <EventsRightDisplay/>
              </div>
            </div>
          </div>
        );
    }

}
