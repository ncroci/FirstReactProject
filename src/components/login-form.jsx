import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return <div class="container">
        <div id="loginDiv">
                <h3>Login</h3>
                <div id="usernameDiv">
                    <p>Username:</p>
                    <input type="text" name="username" id="username" />
                </div>
                <div id="passwordDiv">
                    <p>Password:</p>
                    <input type="password" name="password" id="password" />
                </div> 
                <button id="loginButton" class="btn btn-primary">Login</button> 
            </div>
        </div>
    }
}