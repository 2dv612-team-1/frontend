import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageContainer from "../components/PageContainer";
import RegisterForm from "../containers/RegisterForm";
import Text from "../elements/Text";
import { clearForm } from "../../state/register/actions";

const defaultProps = {
  role: "",
  errorMessage: "",
  successMessage: ""
};

const propTypes = {
  role: PropTypes.string,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  clear: PropTypes.func.isRequired
};

class RegisterPage extends Component {
  componentWillMount() {
    this.props.clear();
  }

  componentWillUnmount() {
    this.props.clear();
  }

  render() {
    let title = "";
    switch (this.props.role) {
      case "company":
        title = "New representative";
        break;
      case "admin":
        title = "New company";
        break;
      default:
        title = "Create new account";
        break;
    }
    return (
      <PageContainer title={title}>
        <RegisterForm role={this.props.role} />
        {this.props.errorMessage ? (
          <Text error>{this.props.errorMessage}</Text>
        ) : null}
        {this.props.successMessage ? (
          <Text success>{this.props.successMessage}</Text>
        ) : null}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  role: state.session.loggedInAs.role,
  errorMessage: state.register.registerHasError.errorMessage,
  successMessage: state.register.registerPostDataSuccess.successMessage,
  isLoading: state.register.registerIsLoading
});

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearForm())
});

RegisterPage.defaultProps = defaultProps;
RegisterPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
