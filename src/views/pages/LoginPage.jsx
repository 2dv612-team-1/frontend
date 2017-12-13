import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reset } from "redux-form";
import LoginForm from "../containers/LoginForm";
import Text from "../elements/Text";
import PageContainer from "../components/PageContainer";
import { clearForm } from "../../state/session/actions";

const defaultProps = {
  admin: "",
  errorMessage: ""
};

const propTypes = {
  admin: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

class LoginPage extends Component {
  componentWillReceiveProps(nextProps) {
    const now = this.props.admin;
    const next = nextProps.admin;
    now !== next
      ? (this.props.reload(), this.props.clear())
      : console.log("route DIDNT changed");
  }

  render() {
    return (
      <PageContainer title="login">
        <LoginForm admin={this.props.admin} />
        {this.props.isLoggedIn ? <Redirect to="/" /> : null}
        {this.props.errorMessage ? (
          <Text center error>
            {this.props.errorMessage}
          </Text>
        ) : null}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.session.loggedInAs.isLoggedIn,
  errorMessage: state.session.loginHasError.errorMessage,
  isLoading: state.session.loginIsLoading
});

const mapDispatchToProps = dispatch => ({
  reload: () => dispatch(reset("login")),
  clear: () => dispatch(clearForm())
});

LoginPage.defaultProps = defaultProps;
LoginPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
