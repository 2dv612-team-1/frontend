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
import RenderField from "../components/RenderField";

const defaultProps = {
  parents: []
};

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  loggedInAs: PropTypes.shape({}).isRequired,
  parents: PropTypes.arrayOf(PropTypes.string)
};

const validate = values => {
  const errors = {};
  !values.category ? errors.category = "Required" : null;
  return errors;
};

let CategoryForm = ({ loggedInAs, handleSubmit, register, parents }) => {
  const onSubmit = values => {
    const data = values;
    data.jwt = loggedInAs.jwt;
    if (data.parent === undefined || data.parent === "Select") {
      register(`${API_HOST}/categories`, data);
    } else {
      register(`${API_HOST}/categories/${data.parent}/subcategories`, data);
    }
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SelectField label="parent" name="parent" type="text" options={parents} />
      <Field label="name" name="category" component={RenderField} type="text" />
      <Button form>Create</Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs
});

CategoryForm.propTypes = propTypes;
CategoryForm.defaultProps = defaultProps;

CategoryForm = reduxForm({
  form: "category",
  validate
})(CategoryForm);

const mapDispatchToProps = dispatch => ({
  register: (url, obj) => dispatch(categoriesPostData(url, obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
