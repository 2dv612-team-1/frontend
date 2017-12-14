import React, { Component } from "react";
import PropTypes from "prop-types";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../components/Button";
import { API_HOST } from "../../libs/API_CONFIG";
import { productsFetchData } from "../../state/products/actions";
import Text from "../elements/Text";
import ErrorMessage from "../components/ErrorMessage";
import PageContainer from "../components/PageContainer";
import Jwt from "../../libs/Jwt";
import Search from "../containers/ProductsSearch";

const defaultProps = {
  searchText: "",
  products: []
};
const propTypes = {
  fetchData: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})),
  loggedInAs: PropTypes.shape({}).isRequired,
  searchText: PropTypes.string
};

class ProductsPage extends Component {
  state = {
    display: []
  };

  componentDidMount() {
    let company = "";
    let url = `${API_HOST}/products`;
    if (this.props.loggedInAs.role === "representative") {
      company = Jwt.getOwner(this.props.loggedInAs.jwt);
      url = `${API_HOST}/companies/${this.props.loggedInAs.username}/products`;
    }
    this.props.fetchData(url);
    console.log(url);
    console.log(this.props.loggedInAs.role);
    console.log(company);
  }

  componentWillReceiveProps(nextProps) {
    // check if search query has changed
    const now = this.props.searchText;
    const next = nextProps.searchText;
    if (now !== next) {
      const filtered = this.props.products.filter(product =>
        product.name.includes(next)
      );
      this.setState({ display: filtered }, function() {
        console.log("search applied");
      });
    }
    console.log(this.state.display);
  }

  render() {
    return (
      <PageContainer title="products">
        {this.props.loggedInAs.role === "representative" ? (
          <Link to="/products/create">
            <Button>Create Product</Button>
          </Link>
        ) : (
          <Search />
        )}
        <Text>All products:</Text>
        {this.state.display
          ? this.state.display.map(product => (
              <div>
                <Link to={`/product/${product._id}`}>{product.name}</Link>
                <br />
              </div>
            ))
          : this.props.products.map(product => (
              <div>
                <Link to={`/product/${product._id}`}>{product.name}</Link>
                <br />
              </div>
            ))}
        <ErrorMessage>{this.props.hasError}</ErrorMessage>
      </PageContainer>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products.products,
  hasError: state.products.productsHasError,
  loggedInAs: state.session.loggedInAs,
  searchText: state.products.search
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(productsFetchData(url))
});

ProductsPage.defaultProps = defaultProps;
ProductsPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
