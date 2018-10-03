import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Analytics extends Component {
    componentDidMount() {
        this.props.updateNavBar("analytics")
    }
    render() {
        return(
            <div>yo</div>
        )
    }
}

export default Analytics