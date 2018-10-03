import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import AddClient from './AddClient'
import UpdateClient from'./UpdateClient'
import './actions.css'

class Actions extends Component {
    componentDidMount() {
        this.props.updateNavBar("actions")
    }
    render() {
        return(
            <div>
                <UpdateClient/>
                <AddClient/>
            </div>
        )
    }
}

export default Actions