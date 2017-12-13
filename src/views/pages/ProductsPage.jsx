import React, { Component } from "react";
import PropTypes from "prop-types";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import { productsFetchData } from "../../state/products/actions";
import Text from "../elements/Text";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import PageContainer from "../components/PageContainer";
import ProductsSearch from "../containers/ProductsSearch";
import Jwt from "../../libs/Jwt";

const propTypes = {
  fetchData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loggedInAs: PropTypes.shape({}).isRequired,
};

class ProductsPage extends Component {
  componentDidMount() {
    // firstly, it has to be fixed in Backend - rep jwt token
    let company = "";
    let url = `${API_HOST}/products`;
    this.props.loggedInAs.role === "representative"
      ? (company = Jwt.getOwner(this.props.loggedInAs.jwt), url = `${API_HOST}/companies/${this.props.loggedInAs.username}/products`)
      : null;
    /*
    const company =
      this.props.loggedInAs.role === "representative"
        ? Jwt.getOwner(this.props.loggedInAs.jwt)
        : "";
    const url =
      this.props.loggedInAs.role === "representative"
        ? `${API_HOST}/companies/${this.props.loggedInAs.username}/products`
        : `${API_HOST}/products`;
        */
    this.props.fetchData(url);
    console.log(url);
    console.log(this.props.loggedInAs.role);
    console.log(company);
  }

  render() {
    return (
      <PageContainer title="products">
        {this.props.loggedInAs.role === "representative" ? (
          <Link to="/products/create">
            <Button>Create Product</Button>
          </Link>
        ) : (
          <ProductsSearch />
        )}
        <Text>All products:</Text>
        {this.props.products ? (
          this.props.products.map(product => (
            <div>
              <Link to={`/product/${product._id}`}>{product.name}</Link>
              <br />
            </div>
          ))
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
  loggedInAs: state.session.loggedInAs,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(productsFetchData(url))
});

ProductsPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
