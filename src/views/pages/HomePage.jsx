import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Table from "ts-react-json-table";
import PageContainer from "../components/PageContainer";
import { forumFetchData } from "../../state/forum/actions";
import { API_HOST } from "../../libs/API_CONFIG";
import Text from "../elements/Text";

const defaultProps = {
  loggedInAs: {
    username: "",
    role: ""
  },
  forum: []
};

const propTypes = {
  loggedInAs: PropTypes.shape({
    username: PropTypes.string,
    role: PropTypes.string
  }),
  forum: PropTypes.arrayOf(PropTypes.shape({})),
  fetchData: PropTypes.func.isRequired
};

class HomePage extends Component {
  // 2state = {myThreads: []};

  componentDidMount() {
    console.log(this.props.loggedInAs.role);
    // GET - /consumers/<username>/threads
    this.props.loggedInAs.role === "consumer"
      ? this.props.fetchData(`${API_HOST}/consumers/${this.props.loggedInAs.username}/threads`)
      : null;
  }

  /*
  componentWillReceiveProps(nextProps) {
    const now = this.props.forum;
    const next = nextProps.forum;
    if (now !== next) {
      if (this.props.loggedInAs.role === "consumer") {
        const filtered = next.filter(
          thread => thread.name === this.props.loggedInAs.username
        );
        this.setState({ myThreads: filtered });
      }
    }
  }
  */

  render() {
    console.log(this.props.forum);

    const columns = [
      {
        key: "title",
        label: "Topic",
        cell: item => <Link to={`/threads/${item._id}`}>{item.title}</Link> // eslint-disable-line no-underscore-dangle
      },
      { key: "name", label: "Name" },
      { key: "timestamp", label: "Date" }
    ];

    const greet =
      this.props.loggedInAs.username === undefined
        ? ""
        : this.props.loggedInAs.username;

    return (
      <PageContainer title={`welcome ${greet}`}>
        {this.props.loggedInAs.role === "consumer" ? (
          <div>
            <Text>My threads:</Text>
            <Table rows={this.props.forum} columns={columns} />
          </div>
        ) : null}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs,
  forum: state.forum.forum
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(forumFetchData(url))
});

HomePage.defaultProps = defaultProps;
HomePage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
