import React, { Component } from 'react';

class SearchClients extends Component {
    handleSearchTerm = (event) => {
        this.props.handleSearchTerm(event.target.value)
    }
    handleSearchType = (event) => {
        this.props.handleSearchType(event.target.value)
    }
    render() {
        return(
            <div>
                <input className="searchInput" 
                       placeholder = "Search"
                       onChange={this.handleSearchTerm}
                       ></input>
                <select className="searchInput"
                        onChange={this.handleSearchType}>
                    <option selected value='name'>Name</option>
                    <option value='emailType'>Email</option>
                    <option value='owner'>Owner</option>
                    <option value='country'>Country</option>
                </select>
            </div>
        )
    }
}

export default SearchClients