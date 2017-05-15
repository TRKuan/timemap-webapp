import React from 'react';

import {
    Radio,
    Form,
    Icon,
    Input,
    Button,
    Checkbox
} from 'antd';
import {Row, Col} from 'antd';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import DatePick from 'components/DatePick.jsx';
import './EventsForm.css';

export default class EventsForm extends React.Component {
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
        }, () => {
            console.log(this.state.transportation);
        });

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const {getFieldDecorator} = this.props.form;
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
            <Form onSubmit={this.handleSubmit} className="login-form" layout='horizontal'>
                <Row>
                    <Col span={16}></Col>
                </Row>
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
                <div className='time'>
                    <div className='time-header'>Time</div>
                    <DatePick/>
                </div>
                <div className='label-header'>Label</div>
                <Row>
                    <Col span={16}>
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
                    <div>
                        <RadioGroup onChange={this.onChange} defaultValue="car">
                            <RadioButton value="car">Car</RadioButton>
                            <RadioButton value="bicylce">Bicycle</RadioButton>
                            <RadioButton value="foot">Foot</RadioButton>
                        </RadioGroup>
                    </div>
                </div>
                <Row>
                    <Col span={16}>
                        <div className='description'>
                            <div className='description-header'>Description</div>
                            <div>
                                <Input type="textarea" placeholder="Description" autosize={{
                                    minRows: 2,
                                    maxRows: 4
                                }}/>
                            </div>
                        </div>
                    </Col>
                </Row>
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
