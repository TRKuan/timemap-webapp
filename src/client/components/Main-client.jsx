import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Col,
    Row,
    Container
} from 'reactstrap';

import {connect} from 'react-redux';
import {toggleNavbar, updateCurrentDate} from 'states/main-client-actions.js';

import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import CalendarPanel from 'components/CalendarPanel.jsx';
import TodayPanel from 'components/TodayPanel.jsx';
import EventsPanel from 'components/EventsPanel.jsx';

import './Main.css';

class MainClient extends React.Component {
    static propTypes = {
        todaysDate: PropTypes.object,
        navbarToggle: PropTypes.bool,
        store: PropTypes.object,
        dispatch: PropTypes.func
    };
    constructor(props) {
        super(props);

        this.handleNavbarToggle = this.handleNavbarToggle.bind(this);
        this.updateDate = this.updateDate.bind(this);

    }
    componentDidMount() {
        this.updateDate();
        setInterval(this.updateDate, 1000);
    }
    render() {
        return (
            <LocaleProvider locale={enUS}>
            <Router>
                <div className='main'>
                    <div className='bg-inverse'>
                        <div className='container'>
                            <Navbar className='' inverse toggleable>
                                <NavbarToggler right onClick={this.handleNavbarToggle}/>
                                <NavbarBrand className='text-info' href="/">
                                    <img className='logo' src='/images/logo.svg'></img>
                                </NavbarBrand>
                                <Collapse isOpen={this.props.navbarToggle} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink tag={Link} to='/'>Today</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/calendar'>Calendar</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/events'>Events</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </div>
                    </div>

                    <Route exact path="/" render={() => (<TodayPanel todaysDate={this.props.todaysDate}/>)}/>
                    <Route exact path="/calendar" render={() => (<CalendarPanel todaysDate={this.props.todaysDate}/>)}/>
                    <Route exact path="/events" render={() => (<EventsPanel todaysDate={this.props.todaysDate}/>)}/> {/*<div className='footer'>
                        TimMap.
                    </div>*/}
                </div>
            </Router>
        </LocaleProvider>
      );
    }
    handleNavbarToggle() {
        this.props.dispatch(toggleNavbar());
        console.log(this.props.navbarToggle);
    }
    updateDate() {
        let currentTime = new Date();
        let currentYear = currentTime.getFullYear();
        let currentMonth = currentTime.getMonth();
        let currentDate = currentTime.getDate();
        let currentDay = currentTime.getDay();

        let month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        let day = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        currentMonth = month[currentMonth];
        currentDay = day[currentDay];

        currentTime = {
            month: currentMonth,
            date: currentDate,
            year: currentYear,
            day: currentDay
        };
        if (currentDate !== this.props.todaysDate.date) {
            this.props.dispatch(updateCurrentDate(currentTime));
        }
    }
}

export default connect(state => ({
    ...state.main
}))(MainClient);
