import React from 'react';

import {Form} from 'antd';
const FormItem = Form.Item;


import EventsForm from 'components/EventsForm.jsx';

import './EventsRightDisplay.css';

export default class EventsRightDisplay extends React.Component {
    constructor(props) {
        super(props);
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
