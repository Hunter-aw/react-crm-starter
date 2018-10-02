import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import SearchClients from './SearchClients';
import ClientNav from './ClientNav';
import ClientsSection from './ClientsSection'
import './clients.css'

class Clients extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            clientData: props.clientData
        }
    }
    componentDidMount () {
        this.props.updateNavBar("clients")
        setTimeout(() => {
            let data = require('../../data.json');
            this.setState({clientData: data})
          }, 100)
    }

    render() {
        return(
            <div className="clientsContainer">
                <SearchClients/>
                <ClientNav/>
                <ClientsSection data = {this.state.clientData}/>
            </div>
        )
    }
}

export default Clients