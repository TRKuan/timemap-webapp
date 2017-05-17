import React from 'react';
import {connect} from 'react-redux';
import {
    Button
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import './CalendarMonth.css';


class CalendarMonth extends React.Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        return (
            <div className='calendar-month'>
                <div className='calendar-header container-fluid'>
                  <div className='month-select row justify-content-center'>
                    <Button className='month-select-button btn'><i className='fa fa-angle-left fa-2x' aria-hidden="true"></i></Button>
                    <div className='vertical-center-parent current-month col-6'>
                        <div className='vertical-center-child'>DECEMBER&nbsp;&nbsp;2017</div>
                    </div>
                    <Button className='month-select-button'><i className='fa fa-angle-right fa-2x' aria-hidden="true"></i></Button>
                  </div>
                  <div className='days-of-the-week row'>
                      <div className='col' style={{padding: 0}}>SUN</div>
                      <div className='col' style={{padding: 0}}>MON</div>
                      <div className='col' style={{padding: 0}}>TUE</div>
                      <div className='col' style={{padding: 0}}>WED</div>
                      <div className='col' style={{padding: 0}}>THU</div>
                      <div className='col' style={{padding: 0}}>FRE</div>
                      <div className='col' style={{padding: 0}}>SAT</div>
                  </div>
                </div>
                <div className='calendar-body container-fluid'>
                  <div className='week row'>
                    <div className='day col'>
                      <div className='vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='week row'>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='has-event-others'>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='has-event-others'>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col picked-day container'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='has-event-picked'>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='has-event-others'>8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='week row'>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='h'>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='has-event-others'>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='has-event-others'>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='has-event-others'>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='hhas-event-others'>8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='week row'>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='has-event-others'>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='has-event-others'>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='has-event-others'>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='week row'>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='has-event-others'>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day current-day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className='has-event-current'>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='week row'>
                    <div className='day col'>
                      <div className='vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                    <div className='day col'>
                      <div className='vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                            <div className=''>8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }

}

export default connect((state) => {
    return {
        ...state.calendar
    };
})(CalendarMonth);
