import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <nav>
                <div className="navigation" id={this.props.location}>
                    <Link to="/clients"><span >Clients</span></Link>
                    {" "}
                    <Link to="/actions"><span>Actions</span></Link>
                    {" "}
                    <Link to="/analytics"><span>Analytics</span></Link>
                    <span className= "currentUser"><Link to="/">{!this.props.name ? "Login" : this.props.name}</Link></span>
                </div>
            </nav>
        )
    }
}

export default Navbar