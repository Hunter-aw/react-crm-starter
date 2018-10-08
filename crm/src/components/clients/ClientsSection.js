import React, { Component } from 'react';
import ClientData from './ClientData'

class ClientSection extends Component {
    render() {
        return(
            <div className="clientSection">
                {this.props.data().map(d => 
                <ClientData id={d._id} data = {d}/>)}
            </div>
        )
    }
}

export default ClientSection