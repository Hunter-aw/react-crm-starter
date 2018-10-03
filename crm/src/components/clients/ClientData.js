import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
                <span className="cell1">{data.name.split(" ")[0]}</span>
                <span className="cell2">{data.name.split(" ")[1]}</span>
                <span className="cell3">{data.country}</span>
                <span className="cell4">{displayDate}</span>
                <span className="cell5">{data.emailType ? data.emailType : "-"}</span>
                <span className="cell6">{data.sold ? <FontAwesomeIcon icon="check"/> : "-"}</span>
                <span className="cell7">{data.owner}</span>
            </div>
        )
    }
}

export default ClientData