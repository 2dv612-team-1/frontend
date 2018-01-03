import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import {
  representativesFetchData,
  representativesClear
} from "../../state/representatives/actions";
import Text from "../elements/Text";
import List from "../components/List";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";

const propTypes = {
  fetchData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  representatives: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loggedInAs: PropTypes.shape({
    username: PropTypes.string
  }).isRequired,
  clear: PropTypes.func.isRequired
};

class RepresentativesPage extends Component {
  componentDidMount() {
    const company = this.props.loggedInAs.username;
    const url = `${API_HOST}/companies/${company}/representatives`;
    this.props.fetchData(url);
  }
  componentWillUnmount() {
    this.props.clear();
  }

  render() {
    return (
      <PageContainer title="Representative">
        <Link to="/register/representative">
          <Button>Register Representative</Button>
        </Link>
        <Text>All representatives:</Text>
        {this.props.representatives ? (
          <List list={this.props.representatives} type="username" />
        ) : null}
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        {this.props.hasError ? <Text error>Could not load data</Text> : null}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  representatives: state.representatives.representatives,
  hasError: state.representatives.representativesHasError,
  isLoading: state.representatives.representativesIsLoading,
  loggedInAs: state.session.loggedInAs
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(representativesFetchData(url)),
  clear: () => dispatch(representativesClear())
});

RepresentativesPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(
  RepresentativesPage
);
