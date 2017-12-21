import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "ts-react-json-table";
import { API_HOST } from "../../libs/API_CONFIG";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";
import Text from "../elements/Text";
import { forumFetchData, forumClear } from "../../state/forum/actions";

const defaultProps = {
  loggedInAs: [],
  isLoading: false,
  errorMessage: "",
  forum: []
};

const propTypes = {
  loggedInAs: PropTypes.shape({}),
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  forum: PropTypes.arrayOf(PropTypes.shape({})),
  fetchData: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired
};

class ForumPage extends Component {
  state = {
    display: []
  };

  componentDidMount() {
    this.props.fetchData(`${API_HOST}/threads`);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props.forum);

  }

  componentWillUnmount() {
    this.props.clear();
  }

  render() {
    const columns = [
      {key: "title", label: "Topic"},
      "name",
      {key: "timestamp", label: "Date"}
    ];

    return (
      <PageContainer title="Forum">
        <Link to="/thread/new">
          <Button>Create new topic</Button>
        </Link>
        <Text>Forum topics:</Text>
        <Table rows={this.props.forum} columns={columns} />
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        {this.props.errorMessage ? <Text error>{this.props.errorMessage}</Text> : null}
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
  fetchData: url => dispatch(forumFetchData(url)),
  clear: () => dispatch(forumClear())
});

ForumPage.defaultProps = defaultProps;
ForumPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ForumPage);
