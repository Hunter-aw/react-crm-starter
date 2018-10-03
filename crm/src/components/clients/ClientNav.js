import React, { Component } from 'react';

class ClientNav extends Component {
    render() {
        return(
            <div className = "clientNav">
                <span className="cell1">Name</span>
                <span className="cell2">Surname</span>
                <span className="cell3">Country</span>
                <span className="cell4">First Contact</span>
                <span className="cell5">Email</span>
                <span className="cell6">Sold</span>
                <span className="cell7">Owner</span>
            </div>
        )
    }
}

export default ClientNav