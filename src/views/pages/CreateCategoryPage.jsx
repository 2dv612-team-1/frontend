import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageContainer from "../components/PageContainer";
import CategoryForm from "../containers/CategoryForm";
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

const CreateCategoryPage = ({ role, errorMessage, successMessage }) => (
  <PageContainer title="new category">
    <CategoryForm role={role} />
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

CreateCategoryPage.defaultProps = defaultProps;
CreateCategoryPage.propTypes = propTypes;
export default connect(mapStateToProps)(CreateCategoryPage);
