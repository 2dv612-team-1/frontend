import React, { Component } from "react";
import PropTypes from "prop-types";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "../components/Button";
import { API_HOST } from "../../libs/API_CONFIG";
import { productsFetchData, productsHasError, productsClear } from "../../state/products/actions";
import Text from "../elements/Text";
import PageContainer from "../components/PageContainer";
import Jwt from "../../libs/Jwt";
import Search from "../containers/ProductsSearch";

const defaultProps = {
  searchText: "",
  products: [],
  error: "",
  hasError: false
};
const propTypes = {
  fetchData: PropTypes.func.isRequired,
  error: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.shape({})),
  loggedInAs: PropTypes.shape({}).isRequired,
  searchText: PropTypes.string,
  hasError: PropTypes.bool
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
      url = `${API_HOST}/companies/${company}/products`;
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
        product.name.concat(product.description).toLowerCase().includes(next.toLowerCase())
      );
      console.log(filtered.length);
      filtered.length !== 0
        ? (this.setState({ display: filtered }), this.props.showError(false, ""))
        : (this.props.showError(true, `${next} gave no matches!`), this.setState({ display: this.props.products}));
    }
    if (next === undefined) {
      console.log("empty search comming in");
      this.setState({ display: [] });
    }
  }

  componentWillUnmount() {
    this.props.clear();
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
        {this.props.hasError ? <Text error>{this.props.error}</Text> : null}
        <Text>All products:</Text>
        {this.state.display.length !== 0
          ? this.state.display.map(product => (
              <div>
                <Link to={`/product/${product._id}`}>{product.name.slice(0, 20)}</Link>
                <br />
              </div>
            ))
          : this.props.products.map(product => (
              <div>
                <Link to={`/product/${product._id}`}>{product.name.slice(0, 20)}</Link>
                <br />
              </div>
            ))}
      </PageContainer>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products.products,
  hasError: state.products.productsHasError.hasError,
  error: state.products.productsHasError.errorMessage,
  loggedInAs: state.session.loggedInAs,
  searchText: state.products.search
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(productsFetchData(url)),
  showError: (bool, msg) => dispatch(productsHasError(bool, msg)),
  clear: () => dispatch(productsClear())
});

ProductsPage.defaultProps = defaultProps;
ProductsPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
