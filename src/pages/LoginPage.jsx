import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import Client from "../libs/Client";
import Auth from "../libs/Auth";
import PageTitle from "../components/PageTitle";
import ErrorMessage from "../components/ErrorMessage";

const defaultProps = {
  admin: "",
  error: ""
};

const propTypes = {
  admin: PropTypes.string,
  error: PropTypes.string
};

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
    // this.setState({ admin: this.props.route });
    const url =
      this.props.admin === "true"
        ? "https://nanotu.be/admins/auth"
        : "https://nanotu.be/auth";

    Client.POST(url, this.state.fields)
      .then(data => {
        // Auth.authenticateUser(data.token);
        data.token !== undefined
          ? (Auth.authenticateUser(data.token),
            this.setState({ redirect: true }))
          : this.setState({ error: "Wrong credentials" });
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
        <PageTitle>Login</PageTitle>
        <LoginForm
          fields={this.state.fields}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        {this.state.redirect ? <Redirect to="/" /> : null}
        <ErrorMessage>{this.state.error}</ErrorMessage>
      </Modal>
    );
  }
}

LoginPage.defaultProps = defaultProps;
LoginPage.propTypes = propTypes;
export default LoginPage;
