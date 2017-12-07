import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import { categoriesFetchData } from "../../state/categories/actions";
import Text from "../elements/Text";
import List from "../components/List";
import ListCategories from "../components/ListCategories";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";

const propTypes = {
  fetchData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

class CategoriesPage extends Component {
  componentDidMount() {
    this.props.fetchData(`${API_HOST}/categories`);
  }

  render() {
    console.log(this.props.categories);
    return (
      <PageContainer title="Categories">
        <Link to="/categories/new">
          <Button>Create new Category</Button>
        </Link>
        <Text>All categories:</Text>
        {this.props.categories ? <ListCategories items={this.props.categories} /> : null}
        {this.props.isLoading ? <Text>Loading...</Text> : null}
        {this.props.hasError ? <Text error>Could not load data</Text> : null}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
  hasError: state.categories.categoriesHasError,
  isLoading: state.categories.categoriesIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(categoriesFetchData(url))
});

CategoriesPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPage);
