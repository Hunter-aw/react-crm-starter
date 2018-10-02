import React, { Component } from 'react';


class ClientData extends Component {
    render() {
        let data = this.props.data
        let date = new Date(data.firstContact)
        let month = date.getUTCMonth() +1
        let day = date.getUTCDay() +1
        let year =date.getUTCFullYear()
        let displayDate = `${day}/${month}/${year}`
        return(
            <div className="detailsBox">
                <span className="cell">{data.name.split(" ")[0]}</span>
                <span className="cell">{data.name.split(" ")[1]}</span>
                <span className="cell">{data.country}</span>
                <span className="cell">{displayDate}</span>
                <span className="cell">{data.emailType ? data.emailType : "-"}</span>
                <span className="cell">{data.sold ? "yes" : "-"}</span>
                <span>{data.owner}</span>
            </div>
        )
    }
}

export default ClientData