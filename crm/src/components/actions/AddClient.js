import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class AddClient extends Component {
    render() {
        return(
            <div className="container">
                <h3>ADD CLIENT</h3>
                    <div className="container add-client">
                        <div className="new-client-grid">
                            <span className="new-client-1">First name: </span>
                            <input className="searchInput underline new-client-2"></input>
                        </div>
                        <div className="new-client-grid">
                            <span className="new-client-1">Surname: </span>
                            <input className="searchInput underline new-client-2"></input>
                        </div>
                        <div className="new-client-grid">
                            <span className="new-client-1">Country: </span>
                            <input className="searchInput underline new-client-2"></input>
                        </div>
                        <div className="new-client-grid">
                            <span className="new-client-1">Owner: </span>
                            <input className="searchInput underline new-client-2"></input>
                        </div>
                    </div>
                <button className="bigButton new-client-9">Add New Client</button>
            </div>
        )
    }
}

export default AddClient