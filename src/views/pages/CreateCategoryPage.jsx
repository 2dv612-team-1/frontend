import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageContainer from "../components/PageContainer";
import CategoryForm from "../containers/CategoryForm";
import Text from "../elements/Text";
import { categoriesFetchData, categoriesClear } from "../../state/categories/actions";
import { API_HOST } from "../../libs/API_CONFIG.js";

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
  fetchData: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired
};

class CreateCategoryPage extends Component {
  componentWillMount() {
    console.log("clear category");
    this.props.clear();
  }

  componentDidMount() {
    this.props.fetchData(`${API_HOST}/categories`);
  }

  componentWillUnmount() {
    console.log("destroy cats");
    this.props.clear();
  }

  render() {
    const parents = this.props.categories.map(parent => parent.category);
    parents.splice(0, 0, "Choose parent category");
    return (
      <PageContainer title="new category">
        <CategoryForm auth={this.props.loggedInAs} parents={parents} />
        {this.props.errorMessage ? (
          <Text error>{this.props.errorMessage}</Text>
        ) : null}
        {this.props.successMessage ? (
          <Text success>{this.props.successMessage}</Text>
        ) : null}
        {this.props.isLoading ? (
          <Text>Loading...</Text>
        ) : null}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs,
  errorMessage: state.categories.categoriesHasError.errorMessage,
  successMessage: state.categories.categoriesPostDataSuccess.successMessage,
  isLoading: state.categories.categoriesIsLoading,
  categories: state.categories.categories
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(categoriesFetchData(url)),
  clear: () => dispatch(categoriesClear())
});

CreateCategoryPage.defaultProps = defaultProps;
CreateCategoryPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(CreateCategoryPage);
