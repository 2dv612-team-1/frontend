import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG"
import { categoriesPostData } from "../../state/categories/actions";
import Button from "../components/Button";
import Form from "../elements/Form";
import Field from "../components/Field";
import SelectField from "../components/SelectField";

const defaultProps = {
  parents: []
};

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  loggedInAs: PropTypes.shape({}).isRequired,
  parents: PropTypes.arrayOf(PropTypes.string)
};

let CategoryForm = ({ loggedInAs, handleSubmit, register, parents }) => {
  const onSubmit = values => {
    const data = values;
    data.jwt = loggedInAs.jwt;
    console.log(data);
    data.parent === undefined
      ? register(`${API_HOST}/categories`, data)
      : register(`${API_HOST}/categories/${data.parent}/subcategories`, data);
    // register(`${API_HOST}/categories`, data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SelectField label="parent" name="parent" type="text" options={parents} />
      <Field label="name" name="category" component="input" type="text" />
      <Button form>Create</Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs
  // categories: state.categories.categories
});

CategoryForm.propTypes = propTypes;
CategoryForm.defaultProps = defaultProps;

CategoryForm = reduxForm({
  form: "category"
})(CategoryForm);

const mapDispatchToProps = dispatch => ({
  register: (url, obj) => dispatch(categoriesPostData(url, obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
