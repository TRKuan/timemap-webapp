import React from 'react';

import {Radio, Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import DatePick from 'components/DatePick.jsx';
import EventsForm from 'components/EventsForm.jsx';

import './EventsRightDisplay.css';

export default class EventsRightDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
    }
    state = {
        transportation: 'car'
    }

    onChange(e) {
        this.setState({
          transportation: e.target.value
        }, ()=>{console.log(this.state.transportation);});

    }

    render() {
        const WrappedEventsForm = Form.create()(EventsForm);
        return (
            <div className='events-right-display'>
                <WrappedEventsForm />

            </div>
        );
    }

}
