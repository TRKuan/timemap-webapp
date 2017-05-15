import React from 'react';

import { DatePicker } from 'antd';

import 'antd/dist/antd.css';
import './DatePick.css';

export default class DatePick extends React.Component{
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    }, ()=>{console.log(this.state.startValue);});
  }

  onStartChange = (value) => {
    this.onChange('startValue', value);
  }

  onEndChange = (value) => {
    this.onChange('endValue', value);
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
        <div className='datePick'>
          <DatePicker
            size='large'
            disabledDate={this.disabledStartDate}
            showTime
            format="YYYY-MM-DD HH:mm"
            value={startValue}
            placeholder="Start Time"
            onChange={this.onStartChange}
            onOpenChange={this.handleStartOpenChange}
            style={{width: 170}}
          />
          <DatePicker
            size='large'
            disabledDate={this.disabledEndDate}
            showTime
            format="YYYY-MM-DD HH:mm"
            value={endValue}
            placeholder="End Time"
            onChange={this.onEndChange}
            open={endOpen}
            onOpenChange={this.handleEndOpenChange}
            style={{width: 170}}
          />
        </div>

    );
  }
}
