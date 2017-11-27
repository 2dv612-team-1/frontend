import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { companiesFetchData } from "../actions/companies";
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

class CompaniesPage extends Component {
  componentDidMount() {
    this.props.fetchData("https://nanotu.be/companies");
  }

  render() {
    return (
      <Modal>
        <PageTitle>Companies</PageTitle>
        <Link to="/register/company">
          <Button>Register Company</Button>
        </Link>
        <Text>All companies:</Text>
        {this.props.companies ? <List list={this.props.companies} /> : null}
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        {this.props.hasError ? (
          <ErrorMessage>Could not load data</ErrorMessage>
        ) : null}
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  companies: state.companies,
  hasError: state.companiesHasError,
  isLoading: state.companiesIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(companiesFetchData(url))
});

CompaniesPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);
