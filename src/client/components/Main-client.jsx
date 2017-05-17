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
import moment from 'moment';

import {connect} from 'react-redux';
import {toggleNavbar, updateCurrentDate} from 'states/main-client-actions.js';

import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import CalendarPanel from 'components/CalendarPanel.jsx';
import TodayPanel from 'components/TodayPanel.jsx';
import EventsPanel from 'components/EventsPanel.jsx';

import {initCalendar} from 'states/calendar-actions';
import {getCurrentPosition} from 'states/map-actions';

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
    componentWillMount() {
        this.props.dispatch(initCalendar());
        this.props.dispatch(updateCurrentDate(moment()));
        setInterval(this.updateDate, 1000);
    }
    render() {
        return (
            <LocaleProvider locale={enUS}>
            <Router>
                <div className='main'>
                    <div className='navbar-background'>
                        <div className='container'>
                            <Navbar className='' inverse toggleable>
                                <NavbarToggler right onClick={this.handleNavbarToggle}/>
                                <NavbarBrand className='text-info' href="/">
                                    <img className='logo' src='/images/logo.svg'></img>
                                </NavbarBrand>
                                <Collapse isOpen={this.props.navbarToggle} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink tag={Link} to='/today'>Today</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/'>Calendar</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/events'>Events</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </div>
                    </div>

                    <Route exact path="/today" render={() => (<TodayPanel todaysDate={this.props.todaysDate}/>)}/>
                    <Route exact path="/" render={() => (<CalendarPanel todaysDate={this.props.todaysDate}/>)}/>
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
        let currentTime = moment();
        /*
        let currentYear = currentTime.year();
        let currentMonth = currentTime.month();
        let currentDate = currentTime.date();
        let currentDay = currentTime.day();
        */
        if (currentTime.date() !== this.props.todaysDate.date()) {
            this.props.dispatch(updateCurrentDate(currentTime));
        }
    }
}

export default connect(state => ({
    ...state.main
}))(MainClient);
