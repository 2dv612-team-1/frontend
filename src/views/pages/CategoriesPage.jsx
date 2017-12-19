import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import { categoriesFetchData, categoriesClear } from "../../state/categories/actions";
import Text from "../elements/Text";
import CategoriesList from "../components/CategoriesList";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";

const defaultProps = {
  isLoading: false,
  categories: [],
  errorMessage: ""
};

const propTypes = {
  fetchData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  clear: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

class CategoriesPage extends Component {
  componentWillMount() {
    this.props.clear();
  }
  componentDidMount() {
    this.props.fetchData(`${API_HOST}/categories`);
  }
  componentWillUnmount() {
    this.props.clear();
  }

  render() {
    // console.log(this.props.categories);
    // Could not load data
    return (
      <PageContainer title="Categories">
        <Link to="/categories/new">
          <Button>Create new Category</Button>
        </Link>
        <Text>All categories:</Text>
        {this.props.categories ? <CategoriesList items={this.props.categories} /> : null}
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        {this.props.errorMessage ? <Text error>{this.props.errorMessage}</Text> : null}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
  isLoading: state.categories.categoriesIsLoading,
  errorMessage: state.categories.categoriesHasError.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(categoriesFetchData(url)),
  clear: () => dispatch(categoriesClear())
});

CategoriesPage.defaultProps = defaultProps;
CategoriesPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
