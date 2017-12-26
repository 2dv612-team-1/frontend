import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "ts-react-json-table";
import { API_HOST } from "../../libs/API_CONFIG";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";
import Text from "../elements/Text";
import {
  forumFetchData,
  forumClear,
  forumHasError
} from "../../state/forum/actions";
import Search from "../containers/Search";

const defaultProps = {
  loggedInAs: [],
  isLoading: false,
  errorMessage: "",
  forum: [],
  searchText: "",
  hasError: false
};

const propTypes = {
  loggedInAs: PropTypes.shape({}),
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  forum: PropTypes.arrayOf(PropTypes.shape({})),
  fetchData: PropTypes.func.isRequired,
  searchText: PropTypes.string,
  clear: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
  showError: PropTypes.bool.isRequired
};

class ForumPage extends Component {
  state = {
    display: []
  };

  componentDidMount() {
    !this.props.forum ? this.props.fetchData(`${API_HOST}/threads`) : null;
  }

  componentWillReceiveProps(nextProps) {
    // check if search query has changed
    const now = this.props.searchText;
    const next = nextProps.searchText;
    if (now !== next) {
      const filtered = this.props.forum.filter(thread =>
        thread.title
          .concat(thread.message)
          .toLowerCase()
          .includes(next.toLowerCase())
      );
      console.log(filtered.length);
      filtered.length !== 0
        ? (this.setState({ display: filtered }),
          this.props.showError(false, ""))
        : (this.props.showError(true, `${next} gave no matches!`),
          this.setState({ display: this.props.forum }));
    }
    // if search query is empty => show all threads
    if (next === undefined) {
      this.setState({ display: [] });
    }
  }

  componentWillUnmount() {
    this.props.clear();
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

    return (
      <PageContainer title="Forum">
        {this.props.loggedInAs.role === "consumer" ? (
          <div>
            <Search target="forum" />
            <Link to="/thread/new">
              <Button>Create new topic</Button>
            </Link>
          </div>
        ) : null}
        {this.props.hasError ? (
          <Text error>{this.props.errorMessage}</Text>
        ) : null}
        <Text>Forum topics:</Text>
        {this.state.display.length !== 0 ? (
          <Table rows={this.state.display} columns={columns} />
        ) : (
          <Table rows={this.props.forum} columns={columns} />
        )}
        {this.props.isLoading ? <Text>Loading...</Text> : null}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs,
  hasError: state.forum.forumHasError.hasError,
  errorMessage: state.forum.forumHasError.errorMessage,
  isLoading: state.forum.forumIsLoading,
  forum: state.forum.forum,
  searchText: state.forum.forumSearchText
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(forumFetchData(url)),
  showError: (bool, msg) => dispatch(forumHasError(bool, msg)),
  clear: () => dispatch(forumClear())
});

ForumPage.defaultProps = defaultProps;
ForumPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ForumPage);
