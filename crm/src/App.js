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
      userName: ""
    }
  }
  updateUser = (name) => {
    this.setState({
      userName: name,
      location: "clients"
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar location = {this.state.location} 
                  name = {this.state.userName}>
          </Navbar>
          <Route path ="/" exact render={() => 
            (this.state.userName ? 
              (<Redirect to="/clients"/>) : 
              (<Login updateUser={this.updateUser}/>))}>
            </Route>
          {/* <Route path ="/clients" exact render={() => <Clients/>}></Route> */}
          {/* <Route path = "/actions" exact render={() => <Actions/>}></Route> */}
          {/* <Route path = "/analytics" exact render={() => <Analytics/>}></Route> */}
        </div>
      </Router>
    );
  }
}

export default App;
