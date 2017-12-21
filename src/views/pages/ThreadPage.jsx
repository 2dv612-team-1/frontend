import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageContainer from "../components/PageContainer";
import Text from "../elements/Text";
import { API_HOST } from "../../libs/API_CONFIG";
import { getThread } from "../../state/thread/actions";

const defaultProps = {
  loggedInAs: [],
  isLoading: false,
  errorMessage: ""
};

const propTypes = {
  loggedInAs: PropTypes.shape({}),
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  // thread: PropTypes.shape({}),
  fetchData: PropTypes.func.isRequired,
  // clear: PropTypes.func.isRequired
};

class ThreadPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      threadId: null
    };
  }


  componentDidMount() {
    var {thread, location, fetchData} = this.props;
    !this.state.threadId ? this.setState({threadId: location.slice(-24)}) : null;
    !this.props.thread.length < 1 ? this.props.fetchData(`${API_HOST}/threads/{this.state.threadId}`) : null;
    thread.length < 1 ? console.log(thread) : null;
    this.state.threadId ? console.log(this.state.threadId) : null;
    console.log
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
  errorMessage: state.thread.threadHasError.errorMessage,
  isLoading: state.thread.threadIsLoading,
  location: state.router.location.pathname,
  thread: state.thread.thread
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(getThread(url))
});

ThreadPage.defaultProps = defaultProps;
ThreadPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ThreadPage);
