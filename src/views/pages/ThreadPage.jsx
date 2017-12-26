import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageContainer from "../components/PageContainer";
import Text from "../elements/Text";
import TextInput from "../components/TextInput";
import DivBg from "../components/DivBg";
import Auth from "../../libs/Auth";
import { API_HOST } from "../../libs/API_CONFIG";
import { getThread, postReply } from "../../state/thread/actions";

const defaultProps = {
  isLoading: false
};

const propTypes = {
  isLoading: PropTypes.bool,
  fetchData: PropTypes.func.isRequired
};

class ThreadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threadId: null,
      replyText: "",
      threadState: []
    };
  }

  handleReplyChange = ({ target: { value } }) => {
    this.setState({
      replyText: value
    });
  };

  submitReply = () => {
    let { location } = this.props;
    let threadId = location.slice(-24);
    this.props.postReply(
      `${API_HOST}/threads/${threadId}/replies`,
      { message: this.state.replyText, jwt: Auth.getToken() },
      `${API_HOST}/threads/${threadId}`
    );
    this.setState({ replyText: "" });
  };

  componentDidMount() {
    let { thread, location, fetchData } = this.props;
    let threadId = location.slice(-24);
    !this.state.threadId
      ? this.setState({ threadId: location.slice(-24) })
      : null;

    this.state.threadState.length < 1
      ? this.props.fetchData(`${API_HOST}/threads/${threadId}`)
      : null;
    !thread.length < 1 ? console.log(thread) : null;
    this.state.threadId ? console.log(this.state.threadId) : null;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.thread !== this.state.threadState) {
      this.setState({ threadState: nextProps.thread });
    }
  }

  render() {
    const replies = this.state.threadState.replies
      ? this.state.threadState.replies
      : [];
    return (
      <PageContainer title={this.state.threadState.title}>
        <Text>{this.state.threadState.message}</Text>
        {replies.map(
          reply =>
            reply.role === "consumer" ? (
              <DivBg>
                <Text bold>
                  {reply.role}: {reply.username} wrote on: {reply.timestamp}
                </Text>
                <Text>{reply.message}</Text>
              </DivBg>
            ) : (
              <DivBg pop>
                <Text bold>
                  {reply.role}: {reply.username} wrote on: {reply.timestamp}
                </Text>
                <Text>{reply.message}</Text>
              </DivBg>
            )
        )}
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        {this.props.hasError ? <Text error>Could not load data</Text> : null}
        <TextInput
          label="Reply"
          value={this.state.replyText}
          onChange={this.handleReplyChange}
        />
        <input onClick={this.submitReply} type="button" value="Reply" />
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
  postReply: (url1, data, url2) => dispatch(postReply(url1, data, url2))
});

ThreadPage.defaultProps = defaultProps;
ThreadPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ThreadPage);
