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
                <UpdateClient generateClients={this.props.generateClients}
                              addClient={this.props.addClient}/>
                <AddClient generateOwners={this.props.generateOwners}
                            addClient={this.props.addClient}/>
            </div>
        )
    }
}

export default Actions