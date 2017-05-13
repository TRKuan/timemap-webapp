import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

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

import CalendarPanel from 'components/CalendarPanel.jsx';
import TodayPanel from 'components/TodayPanel.jsx';

import './Main.css';


export default class MainClient extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
          <Router>
                <div className='main'>
                    <div className='bg-inverse'>
                        <div className='container'>
                            <Navbar className='' inverse toggleable>
                                <NavbarToggler right onClick={this.toggle}/>
                                <NavbarBrand className='text-info' href="/"><img className='logo'src='/images/logo.svg'></img></NavbarBrand>
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink tag={Link} to='/today'>Today</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/'>Calendar</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </div>
                    </div>

                    <Route exact path="/today" render={() => (
                        <TodayPanel />
                    )}/>
                    <Route exact path="/" render={() => (
                        <CalendarPanel />
                    )}/>
                    {/*<div className='footer'>
                        TimMap.
                    </div>*/}
                </div>
            </Router>

        );
    }
}
