import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../containers/LoginForm";
import Text from "../elements/Text";
import PageContainer from "../components/PageContainer";

const defaultProps = {
  admin: "",
  errorMessage: ""
};

const propTypes = {
  admin: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

const LoginPage = ({ admin, isLoggedIn, errorMessage }) => (
  <PageContainer title="login">
    <LoginForm admin={admin} />
    {isLoggedIn ? <Redirect to="/" /> : null}
    {errorMessage ? (
      <Text center error>
        {errorMessage}
      </Text>
    ) : null}
  </PageContainer>
);

const mapStateToProps = state => ({
  isLoggedIn: state.session.loggedInAs.isLoggedIn,
  errorMessage: state.session.loginHasError.errorMessage,
  isLoading: state.session.loginIsLoading
});

LoginPage.defaultProps = defaultProps;
LoginPage.propTypes = propTypes;
export default connect(mapStateToProps)(LoginPage);
