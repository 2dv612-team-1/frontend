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
  state = {
    error: "",
    data: []
  };
  /*
  componentDidMount() {
    const url = "https://nanotu.be/products";
    Client.GET(url)
      .then(data => {
        this.setState({ data: data.products });
      })
      .catch(() => {
        this.setState({ error: "Could not load data" });
      });
  }*/

  render() {
    return (
      <PageContainer title="products">
        {loggedInAs === "representative" ? (
          <Link to="/products/create">
            <Button>Create Product</Button>
          </Link>
        ) : null}
        <Text>All products:</Text>
        {this.state.data ? (
          <List list={this.state.data} />
        ) : (
          <Text>Loading...</Text>
        )}
        <ErrorMessage>{this.state.error}</ErrorMessage>
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
