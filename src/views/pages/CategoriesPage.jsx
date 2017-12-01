import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { categoriesFetchData } from "../../state/categories/actions";
import Text from "../elements/Text";
import List from "../components/List";
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
    this.props.fetchData("https://nanotu.be/categories");
  }

  render() {
    return (
      <PageContainer title="Categories">
        <Link to="/categories/new">
          <Button>Create new Category</Button>
        </Link>
        <Text>All categories:</Text>
        {this.props.categories ? <List list={this.props.categories} ordered type="category" /> : null}
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
