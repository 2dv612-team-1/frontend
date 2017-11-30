import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageContainer from "../components/PageContainer";
import RegisterForm from "../containers/RegisterForm";
import Text from "../elements/Text";

const defaultProps = {
  role: "",
  errorMessage: "",
  successMessage: ""
};

const propTypes = {
  role: PropTypes.string,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string
};

const RegisterPage = ({ role, errorMessage, successMessage }) => (
  <PageContainer title="register">
    <Text success>{role}</Text>
    <RegisterForm role={role} />
    {errorMessage ? <Text error>{errorMessage}</Text> : null}
    {successMessage ? <Text success>{successMessage}</Text> : null}
  </PageContainer>
);

const mapStateToProps = state => ({
  role: state.session.loggedInAs.role,
  errorMessage: state.register.registerHasError.errorMessage,
  successMessage: state.register.registerPostDataSuccess.successMessage,
  isLoading: state.register.registerIsLoading
});

RegisterPage.defaultProps = defaultProps;
RegisterPage.propTypes = propTypes;
export default connect(mapStateToProps)(RegisterPage);
