import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Actions extends Component {
    componentDidMount() {
        this.props.updateNavBar("actions")
    }
    render() {
        return(
            <div>
                <div>

                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default Actions