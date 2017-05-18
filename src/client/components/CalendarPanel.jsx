import React from 'react';
import {
    Button
} from 'reactstrap';


import CalendarMonth from 'components/CalendarMonth.jsx';

import CalendarEventsList from 'components/CalendarEventsList.jsx';

import './CalendarPanel.css';

export default class CalendarPanel extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
          <div className='calendar-panel'>
              <div className='button-nav d-flex flex-row'>
                  <Button className='col-2 current-mode'>Month</Button>
                  <Button className='col-2'>Week</Button>
                  <Button className='col-2'>Day</Button>
                  <Button className='col-2'>Event</Button>
              </div>
              <div className='calendars'>
                  <CalendarMonth/>
                  <CalendarEventsList/>
              </div>
          </div>
        );
    }

}
