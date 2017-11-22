import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Text from "../elements/Text";
import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import Client from "../libs/Client";
import Auth from "../libs/Auth";

class LoginPage extends Component {
  state = {
    fields: {
      username: "",
      password: ""
    },
    redirect: false
  };

  onChange = event => {
    const fields = Object.assign({}, this.state.fields);
    fields[event.target.name] = event.target.value;
    this.setState({ fields });
  };

  onSubmit = event => {
    event.preventDefault();
    const url = "https://nanotu.be/auth";

    Client.POST(url, this.state.fields)
      .then(data => {
        // console.log(data.token);
        Auth.authenticateUser(data.token);
        this.setState({ redirect: true });
      })
      .catch(err => {
        console.log(err);
      });

    // Temp lösning för role
    // localStorage.setItem("role", this.state.fields.role);
    // location.reload();

    // Reset state
    const fields = {
      username: "",
      password: ""
    };
    this.setState({ fields });
  };

  render() {
    return (
      <Modal>
        <Text center>Här kan du logga in...</Text>
        <LoginForm
          fields={this.state.fields}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        {this.state.redirect ? <Redirect to="/" /> : null}
      </Modal>
    );
  }
}

export default LoginPage;
