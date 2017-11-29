import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { representativesFetchData } from "../../state/representatives/actions";
import Text from "../elements/Text";
import Modal from "../components/Modal";
import PageTitle from "../components/PageTitle";
import List from "../components/List";
import ErrorMessage from "../components/ErrorMessage";
import Client from "../../libs/Client";
import Auth from "../../libs/Auth";
import Jwt from "../../libs/Jwt";
import Button from "../components/Button";

const propTypes = {
  fetchData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  representatives: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

class RepresentativesPage extends Component {
  componentDidMount() {
    // https://nanotu.be/companies/{company-name}/representatives
    const company = Jwt.getUsername(Auth.getToken());
    const url = `https://nanotu.be/companies/${company}/representatives`;
    this.props.fetchData(url);
  }

  render() {
    return (
      <Modal>
        <PageTitle>Representative</PageTitle>
        <Link to="/register/representative">
          <Button>Create New Representative</Button>
        </Link>
        <Text>All representatives:</Text>
        {this.props.representatives ? (
          <List list={this.props.representatives} />
        ) : null}
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        {this.props.hasError ? (
          <ErrorMessage>Could not load data</ErrorMessage>
        ) : null}
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  representatives: state.representativesReducer.representatives,
  hasError: state.representativesReducer.representativesHasError,
  isLoading: state.representativesReducer.companiesIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(representativesFetchData(url))
});

RepresentativesPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(
  RepresentativesPage
);
