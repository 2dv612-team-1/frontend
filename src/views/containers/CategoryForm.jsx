import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { categoriesPostData } from "../../state/categories/actions";
import Button from "../components/Button";
import Form from "../elements/Form";
import Field from "../components/Field";

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  loggedInAs: PropTypes.string.isRequired
};

let CategoryForm = ({ loggedInAs, handleSubmit, register }) => {
  const onSubmit = values => {
    const data = values;
    data.jwt = loggedInAs.jwt;
    console.log(data);
    register("https://nanotu.be/categories", data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field label="name" name="category" component="input" type="text" />
      <Button form>Create</Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs
});

CategoryForm.propTypes = propTypes;

CategoryForm = reduxForm({
  form: "category"
})(CategoryForm);

const mapDispatchToProps = dispatch => ({
  register: (url, obj) => dispatch(categoriesPostData(url, obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
