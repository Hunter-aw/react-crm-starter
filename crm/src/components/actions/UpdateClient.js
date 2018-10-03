import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class UpdateClient extends Component {
    render() {
        return(
            <div className="container">
                <h3>UPDATE</h3>
                <span className="section-head">Client:</span>
                <input className="searchInput underline" placeholder=""></input>
                <div className="container update-client">
                    <div className="action-grid">
                        <span className="action-col-1">Transfer ownership to</span>
                        <select className="searchInput underline action-col-2">
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select>
                        <span className="action-col-3">Transfer</span>
                    </div>
                    <div className="action-grid">
                        <span className ="action-col-1">Send email:</span>
                        <select className="searchInput underline action-col-2">
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>
                        <span className="action-col-3">Send</span>
                    </div>
                    <div className="action-grid">
                        <span className="action-col-1">Declare Sale!</span>
                        <span className="action-col-3">Declare</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateClient