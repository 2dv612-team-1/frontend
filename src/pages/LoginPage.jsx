import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { performLogin } from "../actions/session";
import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import PageTitle from "../components/PageTitle";

const defaultProps = {
  admin: ""
};

const propTypes = {
  admin: PropTypes.string,
  isLogedIn: PropTypes.shape({}).isRequired,
  performLogin: PropTypes.func.isRequired
};

class LoginPage extends Component {
  state = {
    fields: {
      username: "",
      password: ""
    }
  };

  onChange = event => {
    const fields = Object.assign({}, this.state.fields);
    fields[event.target.name] = event.target.value;
    this.setState({ fields });
  };

  onSubmit = event => {
    event.preventDefault();

    let url = "https://nanotu.be/auth";
    if (this.props.admin === "true") {
      url = "https://nanotu.be/admins/auth";
    }

    this.props.performLogin(url, this.state.fields);

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
        {this.props.isLogedIn ? <Redirect to="/" /> : null}
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  isLogedIn: state.isLogedIn,
  hasError: state.loginHasError,
  isLoading: state.loginIsLoading
});

const mapDispatchToProps = dispatch => ({
  performLogin: url => dispatch(performLogin(url))
});

LoginPage.defaultProps = defaultProps;
LoginPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
