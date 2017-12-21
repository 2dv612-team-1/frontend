import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageContainer from "../components/PageContainer";
import Text from "../elements/Text";
import { API_HOST } from "../../libs/API_CONFIG";

const defaultProps = {
  loggedInAs: [],
  isLoading: false,
  errorMessage: ""
};

const propTypes = {
  loggedInAs: PropTypes.shape({}),
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  forum: PropTypes.arrayOf(PropTypes.shape({})),
  fetchData: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired
};

class ThreadPage extends Component {

  componentDidMount() {
    this.props.fetchData(`${API_HOST}/threads`);
    console.log();
  }

  render() {
    return (
      <PageContainer title="Thread">
        <Text>This topic:</Text>
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        {this.props.hasError ? <Text error>Could not load data</Text> : null}
      </PageContainer>
    );
  }
}


const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs,
  errorMessage: state.forum.forumHasError.errorMessage,
  isLoading: state.forum.forumIsLoading,
  forum: state.forum.forum
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(forumFetchData(url))
});

ThreadPage.defaultProps = defaultProps;
ThreadPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ThreadPage);
