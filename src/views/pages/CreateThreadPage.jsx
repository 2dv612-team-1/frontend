import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageContainer from "../components/PageContainer";
import ThreadForm from "../containers/ThreadForm";
import Text from "../elements/Text";
import { forumFetchData, forumClear } from "../../state/forum/actions";
import { categoriesFetchData } from "../../state/categories/actions";
import { API_HOST } from "../../libs/API_CONFIG";

const defaultProps = {
  loggedInAs: [],
  isLoading: false,
  errorMessage: "",
  successMessage: "",
  categories: []
};

const propTypes = {
  loggedInAs: PropTypes.shape({}),
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  clear: PropTypes.func.isRequired
};

class CreateThreadPage extends Component {
  componentDidMount() {
    this.props.fetchCats(`${API_HOST}/categories`);
  }

  componentWillUnmount() {
    this.props.clear();
  }

  render() {
    return (
      <PageContainer title="new topic">
        <ThreadForm
          auth={this.props.loggedInAs}
          categories={this.props.categories}
        />
        {this.props.errorMessage ? (
          <Text error>{this.props.errorMessage}</Text>
        ) : null}
        {this.props.successMessage ? (
          <Text success>{this.props.successMessage}</Text>
        ) : null}
        {this.props.isLoading ? <Text>Loading...</Text> : null}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs,
  errorMessage: state.forum.forumHasError.errorMessage,
  successMessage: state.forum.forumPostDataSuccess.successMessage,
  isLoading: state.forum.forumIsLoading,
  categories: state.categories.categories,
  forum: state.forum.forum
});

const mapDispatchToProps = dispatch => ({
  fetchCats: url => dispatch(categoriesFetchData(url)),
  fetchForum: url => dispatch(forumFetchData(url)),
  clear: () => dispatch(forumClear())
});

CreateThreadPage.defaultProps = defaultProps;
CreateThreadPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(CreateThreadPage);
