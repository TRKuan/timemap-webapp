import React from 'react';
import {
    Button
} from 'reactstrap';

import './CalendarMonth.css';

export default class CalendarMonth extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='calendar-month'>
                <div className='calendar-header container-fluid'>
                  <div className='month-select row justify-content-center'>
                    <Button className='month-select-button btn'>pre</Button>
                    <div className='vertical-center-parent current-month col-6'>
                        <div className='vertical-center-child'>DECEMBER 2017</div>
                    </div>

                    <Button className='month-select-button'>nxt</Button>
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
                    <div className='col'>
                      <div className='day vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          26
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          27
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          28
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          29
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          30
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          1
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          2
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='week row'>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          3
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          4
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          5
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          6
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          7
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          8
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          9
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='week row'>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          10
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                        11
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          12
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          13
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          14
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          15
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          16
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='week row'>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          17
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          18
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          19
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          20
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          21
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          22
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          23
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='week row'>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          24
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          25
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          26
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          27
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          28
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          29
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          30
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='week row'>
                    <div className='col'>
                      <div className='day vertical-center-parent' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          31
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          1
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          2
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          3
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          4
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          5
                        </div>
                      </div>
                    </div>
                    <div className='col'>
                      <div className='day vertical-center-parent not-this-month' style={{padding: 0}}>
                        <div className='vertical-center-child'>
                          6
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }

}
