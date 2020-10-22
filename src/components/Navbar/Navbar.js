import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { FaAlignRight } from 'react-icons/fa'

import './Nav/NavElementStyle.js';
import Navbar from './Nav/index'

class NavbarContainer extends Component {
    state = {
        toggle: false
    };

    toggleHandler = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    
    render() {
        return (
            <Router>
                <Navbar />
            </Router>
        )
    }
};

export default NavbarContainer;
