import React, { Component } from 'react';

class ClientNav extends Component {
    render() {
        return(
            <div className = "clientNav">
                <span>Name</span>
                <span>Surname</span>
                <span>Country</span>
                <span>First Contact</span>
                <span>Email</span>
                <span>Sold</span>
                <span>Owner</span>
            </div>
        )
    }
}

export default ClientNav