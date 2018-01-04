import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "ts-react-json-table";
import { API_HOST } from "../../libs/API_CONFIG";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";
import CenteredDiv from "../components/Div";
import HeadingText from "../components/HeadingText";
import Line from "../components/Line";
import Text from "../elements/Text";
import {
  forumFetchData,
  forumClear,
  forumHasError,
  forumSearch
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
  loggedInAs: PropTypes.shape({
    role: PropTypes.string.isRequired
  }),
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  forum: PropTypes.arrayOf(PropTypes.shape({})),
  fetchData: PropTypes.func.isRequired,
  searchText: PropTypes.string,
  clear: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
  showError: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
};

class ForumPage extends Component {
  state = {
    display: []
  };

  componentDidMount() {
    // !this.props.forum ? this.props.fetchData(`${API_HOST}/threads`) : null;
    this.props.fetchData(`${API_HOST}/threads`);
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
    this.props.search("");
  }

  render() {
    const columns = [
      {
        key: "title",
        label: "Topic",
        cell: item => <Link to={`/threads/${item._id}`}>{item.title}</Link> // eslint-disable-line no-underscore-dangle
      },
      { key: "name", label: "Name" },
      { key: "timestamp", label: "Date" }
    ];

    return (
      <PageContainer title="Forum">
        <CenteredDiv>
          {this.props.loggedInAs.role === "consumer" ? (
            <div>
              <Search target="forum" />
              {this.props.hasError ? (
                <Text error>{this.props.errorMessage}</Text>
              ) : null}
              <Line />
            </div>
          ) : null}
        </CenteredDiv>
        <HeadingText>Forum topics:</HeadingText>
        {this.state.display.length !== 0 ? (
          <Table rows={this.state.display} columns={columns} />
        ) : (
          <Table rows={this.props.forum} columns={columns} />
        )}
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        <Link to="/thread/new">
          <Button>Create new topic</Button>
        </Link>
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
  clear: () => dispatch(forumClear()),
  search: text => dispatch(forumSearch(text))
});

ForumPage.defaultProps = defaultProps;
ForumPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ForumPage);
