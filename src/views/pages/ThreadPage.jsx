import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageContainer from "../components/PageContainer";
import Text from "../elements/Text";
import TextInput from "../components/TextInput";
import Auth from "../../libs/Auth";
import { API_HOST } from "../../libs/API_CONFIG";
import { getThread, postReply } from "../../state/thread/actions";

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
      threadId: null,
      replyText: ""
    };
  }

  handleReplyChange = ({target:{value}}) => {
    this.setState({
      replyText: value
    });
  }

  submitReply = () => {
    let {location} = this.props;
    let threadId = location.slice(-24);
    this.props.postReply(`${API_HOST}/threads/${threadId}/replies`, {message:this.state.replyText, jwt: Auth.getToken()});
  }

  componentDidMount() {
    let {thread, location, fetchData} = this.props;
    let threadId = location.slice(-24);

    !this.state.threadId ? this.setState({threadId: location.slice(-24)}) : null;

    this.props.thread.length < 1 ? this.props.fetchData(`${API_HOST}/threads/${threadId}`) : null;
    !thread.length < 1 ? console.log(thread) : null;
    this.state.threadId ? console.log(this.state.threadId) : null;
  }

  render() {
    const replies = this.props.thread.replies ? this.props.thread.replies : [];

    let texties = [];
    replies.forEach(reply => {
      console.log(reply);
    });

    return (
      <PageContainer title={this.props.thread.title}>
        <Text>{this.props.thread.message}</Text>
        {replies.map(reply =>
          <Text>
            Username: {reply.username} Time: {reply.timestamp} Role: {reply.role} Message: {reply.message}
          </Text>
        )}
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        {this.props.hasError ? <Text error>Could not load data</Text> : null}
        <TextInput value={this.state.replyText} onChange={this.handleReplyChange} />
        <input onClick={this.submitReply} type="button" value="Reply"/>
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
  fetchData: url => dispatch(getThread(url)),
  postReply: (url, data) => dispatch(postReply(url, data))
});

ThreadPage.defaultProps = defaultProps;
ThreadPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ThreadPage);
