import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import Button from "../components/Button";
import Form from "../elements/Form";
import Field from "../components/Field";
import { productsSearch } from "../../state/products/actions";

const propTypes = {
  search: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

let ProductsSearch = ({ handleSubmit, search }) => {
  const onSubmit = values => {
    values !== undefined
      ? search(values.search)
      : search(null);
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

ProductsSearch = reduxForm({
  form: "search"
})(ProductsSearch);

const mapDispatchToProps = dispatch => ({
  search: text => dispatch(productsSearch(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSearch);
