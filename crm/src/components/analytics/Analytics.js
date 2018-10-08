import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Medalions from './Medalions';

import './analytics.css'

class Analytics extends Component {
    componentDidMount() {
        this.props.updateNavBar("analytics")
    }
    render() {
        return(
            <div className = 'analyticsGrid'>
                <Medalions/>
                {/* <Charts/> */}
            </div>
        )
    }
}

export default Analytics