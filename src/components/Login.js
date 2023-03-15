import React, { Component } from "react";
import "./login.css"

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state.email, this.state.password)
  };  

  render() {
    return (
        <div className="centerForm">
      <form className="container login" name="login" onSubmit={this.handleLogin}>
        <p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          ></input>
        </p>
        <p>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          ></input>
        </p>
        <p>
            <button type="submit" disabled={!this.state.email && !this.state.password}>Login</button>
        </p>
      </form>
      </div>
    );
  }
}
