import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
const axios = require('axios')
class UpdateClient extends Component {
    constructor() {
        super()
        this.state={
            searchedClients:[],
            client: '',
            selected: false,
            owner: '',
            sale: false,
            id: "",
            newOwner: "",
            newEmail: ""
        }
    }
    generateOtherOwners =() => {
        let owners = this.props.generateOwners()
        let ownerIndex = owners.indexOf(this.state.owner)
        if (ownerIndex !== -1) owners.splice(ownerIndex, 1);
        return owners 
    }
    sendEmail =() => {
            return(
            <span>Sent!</span>
        )
    }
    getOneClientData = async (event) => {
        event.preventDefault()
        let name = event.target[0].value
        let client = await axios.get(`http://localhost:8080/updateClient/${name}`)
        this.setState({
            client: client.data.name,
            owner: client.data.owner,
            sale: client.data.sold,
            selected: true,
            id: client.data._id
        }, ()=> {console.log(this.state)})
    }
    searchClients = (event) => {
        let clients = this.props.generateClients()
        let searchedClients = clients.filter(client => client.toLowerCase()
                            .includes(event.target.value.toLowerCase()))
        searchedClients = searchedClients.splice(0, 8)
        this.setState({
            searchedClients: searchedClients
        }) 
    }
    updateOwner = async() => {
        let newClientData = await axios.put(`http://localhost:8080/updateOwner`, {
            id: this.state.id,
            newOwner: this.state.newOwner
        })
        console.log(newClientData)
        this.setState({owner: newClientData.data.owner})
    }
    updateSale  = async() => {
        let newClientData = await axios.put(`http://localhost:8080/updateSale`, {
            id: this.state.id,
            sale: true
        })
        console.log(newClientData)
        this.setState({sale: newClientData.data.sold})
    }
    updateEmail = async() => {
        let newClientData = await axios.put(`http://localhost:8080/updateEmail`, {
            id: this.state.id,
            emailType: this.state.newEmail
        })
        console.log(newClientData)
        this.setState({sale: newClientData.data.sold})
    }
    setNewOwner = (event) => {
        this.setState({
            newOwner: event.target.value
        })
    }
    setNewEmail = (event) => {
        this.setState({
            newEmail: event.target.value
        })
    }
    
    render() {
        return(
            <div className="container update-client">
                <h3>UPDATE</h3>
                <span className="section-head">Client:</span>
                <form onSubmit={this.getOneClientData}>
                    <input className="searchInput underline" 
                       name="client" 
                       list="clients"
                       onChange={this.searchClients}>
                    </input>
                    <datalist id="clients">
                        {this.state.searchedClients.map(c=><option>{c}</option>)}
                    </datalist>
                </form>
                {!this.state.selected ? null:
                <div className="container">
                    <div className="action-grid">
                        <span className="action-col-1">Transfer ownership to</span>
                        <select className="searchInput underline action-col-2"
                            onChange={this.setNewOwner}>
                            {this.generateOtherOwners().map(o=><option>{o}</option>)}
                        </select>
                        <span className="action-col-3" onClick={this.updateOwner}>Transfer</span>
                    </div>
                    <div className="action-grid">
                        <span className ="action-col-1">Send email:</span>
                        <select className="searchInput underline action-col-2" onChange={this.setNewEmail}>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>
                        <span className="action-col-3" onClick={this.updateEmail}>Send</span>
                    </div>
                    <div className="action-grid">
                        {this.state.sale ? <span className="action-col-1">Sold!</span> :
                        <span className="action-col-1">Declare Sale!</span>}
                        {this.state.sale ? null: <span className="action-col-3" onClick={this.updateSale}>Declare</span>}
                    </div>
                </div> }
            </div>
        )
    }
}

export default UpdateClient