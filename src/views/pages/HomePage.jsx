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
  loggedInAs: [],
  forum: []
};

const propTypes = {
  loggedInAs: PropTypes.shape({
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }),
  forum: PropTypes.arrayOf(PropTypes.shape({})),
  fetchData: PropTypes.func.isRequired
};

class HomePage extends Component {
  state = {
    myThreads: []
  };

  componentDidMount() {
    this.props.loggedInAs.username !== undefined
      ? this.props.fetchData(`${API_HOST}/threads`)
      : null;
  }

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

  render() {
    const columns = [
      {
        key: "title",
        label: "Topic",
        cell: item => (
          <Link to={`/threads/${item._id}`}>{item.title}</Link>
        )
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
            <Table rows={this.state.myThreads} columns={columns} />
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
