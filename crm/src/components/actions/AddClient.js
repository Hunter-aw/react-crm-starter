import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class AddClient extends Component {
    constructor() {
        super()
        this.state={
                "First name":"",
                "Surname": "",
                "Country": "",
                "Email": "",
                "Owner": ""
        }
    }
    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value}, ()=>console.log(this.state))
    }
    addClient = () => {
        this.props.addClient(this.state["First name"], this.state.Surname, 
                            this.state.Country, this.state.Email, this.state.Owner)
    }
    render() {
        let input = ["First name", "Surname", "Country", "Email"]
        return(
            <div className="container">
                <h3>ADD CLIENT</h3>
                    <div className="container add-client">
                        {input.map((i)=> <div className="new-client-grid">
                            <span className="new-client-1"> {i}: </span>
                            <input className="searchInput underline new-client-2" 
                                   name={i} onChange={this.handleInput}></input>
                        </div>
                        )}
                        <div>
                            <div className="new-client-grid">
                                <span className="new-client-1">Owner: </span>
                                <select className="searchInput underline new-client-2" 
                                        name="Owner"
                                        onChange={this.handleInput}
                                        value = {this.state.Owner}>
                                    {this.props.generateOwners().map((o)=><option>{o}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                <button className="bigButton new-client-9"
                        onClick={this.addClient}>Add New Client</button>
            </div> 
        )
    }
}

export default AddClient