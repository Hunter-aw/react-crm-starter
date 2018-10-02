import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Clients from './components/clients/Clients';
import Actions from './components/actions/Actions';
import Analytics from './components/analytics/Analytics'
import Login from './components/Login'
import Navbar from './components/Navbar'
import './App.css';

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
  updateClientData = (data) => {
    this.setState({
      clientData: data
    })
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
                    updateClientData = {this.updateClientData}/>}></Route>
          <Route path = "/actions" exact render={() => 
            <Actions updateNavBar={this.updateNavBar}/>}></Route>
          <Route path = "/analytics" exact render={() => 
            <Analytics updateNavBar={this.updateNavBar}/>}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
