import React from 'react';
import {connect} from 'react-redux';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import moment from 'moment';
import uuid from 'uuid/v4'
import {addEvent, updateEventInfo} from 'states/calendar-actions.js';

class EventForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText: "",
            inputDate: "",
            inputTime: ""
        };
    }

    render() {
        return (
            <div className='event-form'>
              <Form inline onSubmit={(e) => this.handleSubmite(e)}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input onChange={(e) => this.handleTextChange(e)} value={this.state.inputText} type="text" name="name" id="name" placeholder="event name" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate">Date</Label>
                  <Input onChange={(e) => this.handleDateChange(e)} value={this.state.inputDate}type="date" name="date" id="exampleDate" placeholder="date placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleTime">Time</Label>
                  <Input onChange={(e) => this.handleTimeChange(e)} value={this.state.inputTime}type="time" name="time" id="exampleTime" placeholder="time placeholder" />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({inputText: e.target.value});
    }
    handleDateChange(e){
        this.setState({inputDate: e.target.value});
    }
    handleTimeChange(e){
        this.setState({inputTime: e.target.value});
    }
    handleSubmite(e){
        e.preventDefault();
        this.setState({
            inputText: "",
            inputDate: "",
            inputTime: ""
        });
        var event = {
            id: uuid(),
            title: this.state.inputText,
            ts: moment(this.state.inputDate+" "+this.state.inputTime).valueOf(),
            geolocation: this.props.pinPosition
        };
        this.props.dispatch(addEvent(event));
        this.props.dispatch(updateEventInfo(event.id));
    }

}

export default connect((state) => {
    return {
        ...state.calendar,
        ...state.map
    };
})(EventForm);
