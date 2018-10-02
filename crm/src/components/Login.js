import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect} from 'react-router-dom';

class Login extends Component {
    loginUser = (event) => {
        event.preventDefault();
        let username = event.target[0].value
        this.props.updateUser(username)

    }
    render() {
        return(
            <div className="container">
                <div className="login">
                <h1>Please Log in Below</h1>
                    <form onSubmit={this.loginUser}>
                        <input placeholder="User Name"></input> 
                        <br></br>
                        <input type="password" placeholder= "Password"></input>
                        <br></br>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login