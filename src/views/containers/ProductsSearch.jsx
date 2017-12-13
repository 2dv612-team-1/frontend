import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import Button from "../components/Button";
import Form from "../elements/Form";
import Field from "../components/Field";

const defaultProps = {
  searchResult: [],
  products: [],
};
const propTypes = {
  searchResult: PropTypes.arrayOf(PropTypes.shape({})),
  products: PropTypes.arrayOf(PropTypes.shape({})),
  handleSubmit: PropTypes.func.isRequired,
};

let ProductsSearch = ({ products, searchResult, handleSubmit }) => {
  const onSubmit = values => {
    const match = values.search;
    products.forEach(product => {
      product.name.includes(match) ? searchResult.push(product) : null;
    });
    console.log(searchResult);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field label="search" name="search" component="input" type="text" />
      <Button form>Search</Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  products: state.products.products
});

ProductsSearch.propTypes = propTypes;
ProductsSearch.defaultProps = defaultProps;

ProductsSearch = reduxForm({
  form: "search"
})(ProductsSearch);

export default connect(mapStateToProps)(ProductsSearch);
