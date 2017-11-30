import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { representativesFetchData } from "../../state/representatives/actions";
import Text from "../elements/Text";
import List from "../components/List";
import Auth from "../../libs/Auth";
import Jwt from "../../libs/Jwt";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";

const propTypes = {
  fetchData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  representatives: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loggedInAs: PropTypes.string.isRequired
};

class RepresentativesPage extends Component {
  componentDidMount() {
    // const company = Jwt.getUsername(Auth.getToken());
    const company = this.props.loggedInAs.username;
    const url = `https://nanotu.be/companies/${company}/representatives`;
    console.log(url);
    this.props.fetchData(url);
  }

  render() {
    return (
      <PageContainer title="Representative">
        <Link to="/register/representative">
          <Button>Register Representative</Button>
        </Link>
        <Text>All representatives:</Text>
        {this.props.representatives ? <List list={this.props.representatives} /> : null}
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
  fetchData: url => dispatch(representativesFetchData(url))
});

RepresentativesPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(
  RepresentativesPage
);
