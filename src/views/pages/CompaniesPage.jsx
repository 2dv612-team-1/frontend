import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { companiesFetchData } from "../../state/companies/actions";
import Text from "../elements/Text";
import Modal from "../components/Modal";
import PageTitle from "../components/PageTitle";
import List from "../components/List";
import ErrorMessage from "../components/ErrorMessage";
import Button from "../components/Button";

const propTypes = {
  fetchData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  companies: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const CompaniesPage = ({ fetchData, companies, isLoading, hasError }) => {
  fetchData("https://nanotu.be/companies");

        <PageTitle>Companies</PageTitle>
  return (
    <Modal>
      <Link to="/register/company">
        <Button>Register Company</Button>
      </Link>
      <Text>All companies:</Text>
      {companies ? <List list={companies} /> : null}
      {isLoading ? <Text>Loading...</Text> : null}
      {hasError ? <ErrorMessage>Could not load data</ErrorMessage> : null}
    </Modal>
  );
};

const mapStateToProps = state => ({
  companies: state.companiesReducer.companies,
  hasError: state.companiesReducer.companiesHasError,
  isLoading: state.companiesReducer.companiesIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(companiesFetchData(url))
});

CompaniesPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);
