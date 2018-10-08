import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Medalions extends Component {
    render() {
        let icons = ['chartline', '', '', '']
        return(
            <div className='medalions'>
                <FontAwesomeIcon icon='chart-line' className='medalion chart'/>
                <FontAwesomeIcon icon='envelope' className='medalion envelope'/>
                <FontAwesomeIcon icon='user-circle' className='medalion user'/>
                <FontAwesomeIcon icon='globe-americas' className='medalion globe'/>
            </div>
        )
    }
}

export default Medalions