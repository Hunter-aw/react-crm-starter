import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Clients from './components/clients/Clients';
import Actions from './components/actions/Actions';
import Analytics from './components/analytics/Analytics'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './App.css';
const axios = require('axios')
library.add(faCheck);

class App extends Component {
  constructor() {
    super()
    this.state = {
      location: "",
      userName: "",
      clientData: []
    }
  }
  updateUser = (name) => {
    this.setState({
      userName: name
    })
  }
  updateNavBar = (location) => {
    this.setState({
      location: location
    })
  }
  updateClientData = async() => {
    let data = await axios.get('http://localhost:8080/clients')
      this.setState({
        clientData: data.data
      }, ()=>console.log(data)
    )
  }
  addClient = async(name, surname, country, email, owner) => {
    await axios.post('http://localhost:8080/newclient', {
        name: `${name} ${surname}`,
        country: country,
        email: email,
        owner: owner
    })
    // console.log(client)
    this.updateClientData()

  }
  generateOwners =() => {
    const ownersList = [...new Set(this.state.clientData.map(client => client.owner))]
    return ownersList
  }
  generateClients =() => {
    const clientList = [...new Set(this.state.clientData.map(client => client.name))]
    return clientList
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar location = {this.state.location} 
                  name = {this.state.userName}
                  updateNavBar={this.updateNavBar}>
          </Navbar>
          <Route path ="/" exact render={() => 
            (this.state.userName ? 
              (<Redirect to="/clients"/>) : 
              (<Login updateUser={this.updateUser}
                      updateNavBar={this.updateNavBar}/>))}>
            </Route>
          <Route path ="/clients" exact render={() => 
            <Clients updateNavBar={this.updateNavBar}
                     clientData = {this.state.clientData}
                     updateClientData = {this.updateClientData}/>}>
          </Route>
          <Route path = "/actions" exact render={() => 
            <Actions updateNavBar={this.updateNavBar}
                     generateClients={this.generateClients}
                     generateOwners={this.generateOwners}
                     addClient={this.addClient}/>}>
          </Route>
          <Route path = "/analytics" exact render={() => 
            <Analytics updateNavBar={this.updateNavBar}/>}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
