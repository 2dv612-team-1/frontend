import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageContainer from "../components/PageContainer";
import Text from "../elements/Text";
import TextInput from "../components/TextInput";
import DivBg from "../components/DivBg";
import Input from "../components/Input";
import Auth from "../../libs/Auth";
import { API_HOST } from "../../libs/API_CONFIG";
import { getThread, postReply, patch } from "../../state/thread/actions";
import Jwt from "../../libs/Jwt";

const defaultProps = {
  isLoading: false,
  hasError: false
};

const propTypes = {
  isLoading: PropTypes.bool,
  fetchData: PropTypes.func.isRequired,
  thread: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({}))
  ]).isRequired,
  location: PropTypes.string.isRequired,
  postReply: PropTypes.func.isRequired,
  hasError: PropTypes.bool
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

  componentDidMount() {
    const { thread, location } = this.props;
    const threadId = location.slice(-24);
    !this.state.threadId
      ? this.setState({ threadId: location.slice(-24) })
      : null;

    this.state.threadState.length < 1
      ? this.props.fetchData(`${API_HOST}/threads/${threadId}`)
      : null;

    // https://nanotu.be/companies/<name>/threads/<thread_id> | PATCH
    const token = this.props.loggedInAs.jwt;
    const json = { jwt: token };
    const url = `${API_HOST}/companies/${Jwt.getOwner(token)}/threads/${threadId}`;
    this.props.loggedInAs.role === "representative"
      ? this.props.markRead(url, json)
      : null;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.thread !== this.state.threadState) {
      this.setState({ threadState: nextProps.thread });
    }
  }

  handleReplyChange = ({ target: { value } }) => {
    this.setState({
      replyText: value
    });
  };

  submitReply = () => {
    const { location } = this.props;
    const threadId = location.slice(-24);
    this.props.postReply(
      `${API_HOST}/threads/${threadId}/replies`,
      { message: this.state.replyText, jwt: Auth.getToken() },
      `${API_HOST}/threads/${threadId}`
    );
    this.setState({ replyText: "" });
  };

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
              <DivBg key={reply.username}>
                <Text bold>
                  {reply.role}: {reply.username} wrote on: {reply.timestamp}
                </Text>
                <Text>{reply.message}</Text>
              </DivBg>
            ) : (
              <DivBg pop key={reply.username}>
                <Text bold>
                  {reply.role}: {reply.username} wrote on: {reply.timestamp}
                </Text>
                <Text>{reply.message}</Text>
              </DivBg>
            )
        )}
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        {this.props.hasError ? <Text error>Could not load data</Text> : null}
        <div>
          <TextInput
            label="Reply"
            value={this.state.replyText}
            onChange={this.handleReplyChange}
          />
          <Input onClick={this.submitReply} type="button" value="Reply" />
        </div>
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
  postReply: (url1, data, url2) => dispatch(postReply(url1, data, url2)),
  markRead: (url, jwt) => dispatch(patch(url, jwt))
});

ThreadPage.defaultProps = defaultProps;
ThreadPage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ThreadPage);
