import React from 'react';
import {
    Button
} from 'reactstrap';

import TodayDisplay from 'components/TodayDisplay.jsx';
import TodayLocation from 'components/TodayLocation.jsx';


export default class TodayPanel extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='today-panel'>
                <TodayDisplay/>
                <TodayLocation/>
            </div>
        );
    }

}
