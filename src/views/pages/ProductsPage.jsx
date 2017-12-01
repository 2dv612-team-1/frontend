import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { productsFetchData } from "../../state/products/actions";
import Text from "../elements/Text";
import List from "../components/List";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import PageContainer from "../components/PageContainer";

const propTypes = {
  fetchData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loggedInAs: PropTypes.string.isRequired
};

class ProductsPage extends Component {
  componentDidMount() {
    const url = "https://nanotu.be/products";
    this.props.fetchData(url);
  }

  render() {
    return (
      <PageContainer title="products">
        {this.props.loggedInAs === "representative" ? (
          <Link to="/products/create">
            <Button>Create Product</Button>
          </Link>
        ) : null}
        <Text>All products:</Text>
      {this.props.products ? (
          <List list={this.props.companies} />
        ) : (
          <Text>Loading...</Text>
        )}
        <ErrorMessage>{this.props.hasError}</ErrorMessage>
      </PageContainer>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products.products,
  hasError: state.products.productsHasError,
  isLoading: state.products.productsIsLoading,
  loggedInAs: state.session.loggedInAs.role
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(productsFetchData(url))
});

ProductsPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
