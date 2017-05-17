import React from 'react';
import {connect} from 'react-redux';

import {
    Radio,
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    DatePicker,
    TimePicker
} from 'antd';
import {Row, Col, message} from 'antd';
import moment from 'moment';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import {submitForm, cleanForm} from 'states/events-form-actions.js';
import {addEvent} from 'states/calendar-actions.js';

import DatePick from 'components/DatePick.jsx';

import './EventsForm.css';

class EventsForm extends React.Component {
    constructor(props) {
        super(props);
        this.success = this.success.bind(this);
        this.added = this.added.bind(this);
    }
    success(){
      const hide = message.loading('Adding Event...', 0);
      setTimeout(hide, 800);
      setTimeout(this.added, 900);
    }
    added(){
      const added = message.success('Event Added!');
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let startTime = moment({year: values.startTimeYMD.year(), month: values.startTimeYMD.month(), date: values.startTimeYMD.date(), hour: values.startTimeHM.hour(), minute: values.startTimeHM.minute()});
                let endTime = moment({year: values.endTimeYMD.year(), month: values.endTimeYMD.month(), date: values.endTimeYMD.date(), hour: values.endTimeHM.hour(), minute: values.endTimeHM.minute()});
                let lng = null;
                let lat = null;
                if(this.props.pinPosition){
                    lng = this.props.pinPosition.lng;
                    lat = this.props.pinPosition.lat;
                }
                let event = {
                    location: values.location,
                    lng: lng,
                    lat: lat,
                    startTs: startTime.toISOString(),
                    endTs: endTime.toISOString(),
                    allDay: false,
                    title: values.title,
                    description: values.description,
                    label: values.label,
                    trans: values.transportation
                }
                console.log(event);
                this.props.dispatch(addEvent(event));

                //console.log(this.props.pinPosition);

                //  this.props.dispatch(cleanForm());
                this.success();
                setTimeout(this.props.form.resetFields(), 1000);

            }
        });
    }
    render() {
        const FormItem = Form.Item;
        const {getFieldDecorator} = this.props.form;
        const startTimeRules = {
            rules: [
                {
                    required: true,
                    message: 'Please set start time!'
                }
            ]
        };
        const endTimeRules = {
            rules: [
                {
                    required: true,
                    message: 'Please set end time!'
                }
            ]
        };

        const formItemLayout = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                span: 16
            }
        }
        const buttonItemLayout = {
            wrapperCol: {
                offset: 10
            }
        };
        return (
            <Form onSubmit={this.handleSubmit} className="submit-form" layout='horizontal'>
                <Row>
                    <Col span={16}>
                        <div className='title-header'>Title</div>
                        <FormItem >
                            {getFieldDecorator('title', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please set a title!'
                                    }
                                ]
                            })(
                                <Input prefix={< Icon type = "book" style = {{ fontSize: 13 }}/>} placeholder="Title"/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={10}>
                        <div className='start-time'>
                            <div className='start-time-header'>Start Time</div>
                            <FormItem >
                                {getFieldDecorator('startTimeYMD', startTimeRules)(<DatePicker format="YYYY-MM-DD"/>)}
                            </FormItem>
                            <FormItem >
                                {getFieldDecorator('startTimeHM', startTimeRules)(<TimePicker format="HH:mm"/>)}
                            </FormItem>
                        </div>
                    </Col>
                    <Col xs={24} sm={{
                        span: 10,
                        offset: 2
                    }}>
                        <div className='end-time'>
                            <div className='end-time-header'>End Time</div>
                            <FormItem >
                                {getFieldDecorator('endTimeYMD', endTimeRules)(<DatePicker format="YYYY-MM-DD"/>)}
                            </FormItem>
                            <FormItem >
                                {getFieldDecorator('endTimeHM', endTimeRules)(<TimePicker format="HH:mm"/>)}
                            </FormItem>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col span={16}>
                        <div className='label-header'>Label</div>
                        <FormItem >
                            {getFieldDecorator('label', {
                                rules: [
                                    {
                                        required: false,
                                        message: ''
                                    }
                                ]
                            })(
                                <Input prefix={< Icon type = "tag-o" style = {{ fontSize: 13 }}/>} type="label" placeholder="Label"/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <div className='transportation'>
                    <div className='transportation-header'>Transportation</div>
                    <FormItem>
                        {getFieldDecorator('transportation', {
                            initialValue: 'driving'
                        }, {
                            rules: [
                                {
                                    required: false,
                                    message: ''
                                }
                            ]
                        })(
                            <RadioGroup >
                                <RadioButton value="driving">Driving</RadioButton>
                                <RadioButton value="cycling">Cycling</RadioButton>
                                <RadioButton value="walking">Walking</RadioButton>
                            </RadioGroup>
                        )}
                    </FormItem>
                </div>
                <div className='description'>
                    <div className='description-header'>Description</div>
                    <FormItem wrapperCol={{
                        span: 16
                    }}>
                        {getFieldDecorator('description', {
                            rules: [
                                {
                                    required: false,
                                    message: ''
                                }
                            ]
                        })(<Input type="textarea" placeholder="Description" autosize={{
                            minRows: 2,
                            maxRows: 4
                        }}/>)}
                    </FormItem>
                </div>

                <Row>
                    <Col span={16}>
                        <div className='location-header'>Location</div>
                        <FormItem >
                            {getFieldDecorator('location', {
                                rules: [
                                    {
                                        required: false,
                                        message: ''
                                    }
                                ]
                            })(
                                <Input prefix={< Icon type = "environment-o" style = {{ fontSize: 13 }}/>} placeholder="Location"/>
                            )}
                        </FormItem>
                    </Col>
                </Row>

                <FormItem {...buttonItemLayout}>
                    <div className='submit-button'>
                        <Button type="primary" htmlType="submit" className="submit-form-button">
                            Submit
                        </Button>
                    </div>
                </FormItem>

            </Form>
        );
    }
}
export default connect(state => ({
    ...state.eventsForm,
    ...state.map
}))(EventsForm);
