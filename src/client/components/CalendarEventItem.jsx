import React from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Popconfirm, message } from 'antd';
import './CalendarEventItem.css';
import moment from 'moment';

export default class CalendarEventItem extends React.Component {
    constructor(props) {
        super(props);
        this.confirm = this.confirm.bind(this);
        this.cancel = this.cancel.bind(this);

    }
    confirm(e) {
      console.log(e);
      message.success('Deleted');
    }

    cancel(e) {


    }
    render() {
        let color = 'rgb(74, 228, 196)';
        let startTime = moment(this.props.startTs).format('LT');
        let endTime = moment(this.props.endTs).format('LT');
        var labelColor={borderColor: color};


        return (
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div className='calendar-event-item' style={labelColor}>
                <div className='row'>
                    <div className='col-5'>{this.props.title}</div>
                    <div className='col-3 event-time'>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;{startTime}
                    </div>
                    <div className='col-3 event-location'>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;{this.props.location}
                    </div>
                    <div className='col-1 delete-event'>
                      <Popconfirm title="Are you sure to delete this task?" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
                          <i className='delete-button fa fa-times'></i>
                      </Popconfirm>
                    </div>
                </div>
            </div>
          </ReactCSSTransitionGroup>

        );
    }

}
