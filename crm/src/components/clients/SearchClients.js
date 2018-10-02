import React, { Component } from 'react';

class SearchClients extends Component {
    render() {
        return(
            <div>
                <input className="searchInput" placeholder = "Search"></input>
                <select className="searchInput">
                    <option>Name</option>
                    <option>Email</option>
                    <option>Owner</option>
                    <option>Country</option>
                </select>
            </div>
        )
    }
}

export default SearchClients