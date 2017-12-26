import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { API_HOST } from "../../libs/API_CONFIG";
import {
  companiesFetchData,
  companiesClear
} from "../../state/companies/actions";
import Text from "../elements/Text";
import List from "../components/List";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";

const propTypes = {
  fetchData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  companies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  clear: PropTypes.func.isRequired
};

class CompaniesPage extends Component {
  componentDidMount() {
    this.props.fetchData(`${API_HOST}/companies`);
  }
  componentWillUnmount() {
    this.props.clear();
  }

  render() {
    return (
      <PageContainer title="companies">
        <Link to="/register/company">
          <Button>Register Company</Button>
        </Link>
        <Text>All companies:</Text>
        {this.props.companies ? (
          <List list={this.props.companies} ordered type="username" />
        ) : null}
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        {this.props.hasError ? <Text error>Could not load data</Text> : null}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  companies: state.companies.companies,
  hasError: state.companies.companiesHasError,
  isLoading: state.companies.companiesIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(companiesFetchData(url)),
  clear: () => dispatch(companiesClear())
});

CompaniesPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);
