import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { performLogin } from "../../state/session/actions";
import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import PageTitle from "../components/PageTitle";
import Text from "../elements/Text";

const defaultProps = {
  admin: "",
  hasError: ""
};

const propTypes = {
  admin: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  performLogin: PropTypes.func.isRequired,
  hasError: PropTypes.string
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
        {this.props.isLoggedIn ? <Redirect to="/" /> : null}
        {this.props.hasError.errorMessage ? (
          <Text error>`${this.props.hasError.errorMessage}`</Text>
        ) : null}
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.loggedInAs.isLoggedIn,
  hasError: state.loginHasError,
  isLoading: state.loginIsLoading
});

const mapDispatchToProps = dispatch => ({
  performLogin: (url, obj) => dispatch(performLogin(url, obj))
});

LoginPage.defaultProps = defaultProps;
LoginPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
