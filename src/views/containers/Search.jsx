import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import Button from "../components/Button";
import Form from "../elements/Form";
import Field from "../components/Field";
import { productsSearch } from "../../state/products/actions";
import { forumSearch } from "../../state/forum/actions";

const propTypes = {
  searchProducts: PropTypes.func.isRequired,
  searchForum: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired
};

let Search = ({ handleSubmit, searchProducts, searchForum, target }) => {
  const onSubmit = values => {
    if (target === "products") {
      values.search !== undefined
        ? searchProducts(values.search)
        : searchProducts("");
    } else if (target === "forum") {
      values.search !== undefined
        ? searchForum(values.search)
        : searchForum("");
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field label="search" name="search" component="input" type="text" />
      <Button form>Search</Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  // products: state.products.products
});

Search.propTypes = propTypes;

Search = reduxForm({
  form: "search"
})(Search);

const mapDispatchToProps = dispatch => ({
  searchProducts: text => dispatch(productsSearch(text)),
  searchForum: text => dispatch(forumSearch(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
