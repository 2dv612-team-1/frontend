import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Table from "ts-react-json-table";
import PageContainer from "../components/PageContainer";
import { forumFetchData } from "../../state/forum/actions";
import { API_HOST } from "../../libs/API_CONFIG";
import Text from "../elements/Text";
import Auth from "../../libs/Auth";
import Jwt from "../../libs/Jwt";

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
  componentDidMount() {
    // GET - /consumers/<username>/threads
    this.props.loggedInAs.role === "consumer"
      ? this.props.fetchData(
          `${API_HOST}/consumers/${this.props.loggedInAs.username}/threads`
        )
      : null;

    this.props.loggedInAs.role === "representative"
      ? this.props.fetchData(
          `${API_HOST}/threads/${Jwt.getOwner(this.props.loggedInAs.jwt)}/unread`
        )
      : null;

  }

  render() {
    const columns = [
      {
        key: "title",
        label: "Topic",
        cell: item => (
          <span
            style={{
              background: "white",
              width: "300px",
              display: "block",
              padding: "10px"
            }}
          >
            <Link to={`/threads/${item._id}`}>{item.title}</Link>
          </span>
        )
      },
      {
        key: "name",
        label: "Name",
        cell: item => (
          <span
            style={{
              background: "white",
              width: "150px",
              display: "block",
              padding: "10px"
            }}
          >
            {item.name}
          </span>
        )
      },
      {
        key: "timestamp",
        label: "Date",
        cell: item => (
          <span
            style={{
              background: "white",
              width: "150px",
              display: "block",
              padding: "10px"
            }}
          >
            {item.timestamp.substr(0, item.timestamp.indexOf(" "))}
          </span>
        )
      }
    ];

    const greet =
      this.props.loggedInAs.username === undefined
        ? ""
        : this.props.loggedInAs.username;

    return (
      <PageContainer title={`welcome ${greet}`}>
        {this.props.loggedInAs.role === "consumer" || this.props.loggedInAs.role === "representative" ? (
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
