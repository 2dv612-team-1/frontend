import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import { forumPostData } from "../../state/forum/actions";
import { categoriesGetSubs } from "../../state/categories/actions";
import Button from "../components/Button";
import Form from "../elements/Form";
import Field from "../components/Field";
import SelectField from "../components/SelectField";
import RenderField from "../components/RenderField";

const defaultProps = {
  categories: []
};

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  categoriesGetSubs: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({}))
};

const validate = values => {
  const errors = {};
  !values.title ? errors.title = "Required" : null;
  return errors;
};

let ThreadForm = ({ loggedInAs, handleSubmit, register, dispatchSubs, categories, subcategories }) => {
  const parents = categories.map(cat => cat.category);
  console.log(parents);

  const getSubs = parent => {
    const cat = categories.filter(item =>
      item.category.toLowerCase().includes(parent.toLowerCase())
    );
    const subs = cat[0].sub.map(item => item.category);
    dispatchSubs(subs);
  };

  const onSubmit = values => {
    const data = values;
    console.log(data);
  };

  const onChange = event => {
    console.log(event);
    const val = event.target.value;
    console.log(val);
    getSubs(val);
    console.log(subcategories);
    // this.category.onChange(val);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SelectField
        label="category"
        name="category"
        type="text"
        options={parents}
        onChange={onChange}
      />
      <SelectField
        label="sub category"
        name="sub"
        type="text"
        options={subcategories}
      />
      <Field label="title" name="title" component={RenderField} type="text" />
      <Button form>go</Button>
    </Form>
  );
};

ThreadForm.propTypes = propTypes;
ThreadForm.defaultProps = defaultProps;

ThreadForm = reduxForm({
  form: "thread",
  validate
})(ThreadForm);

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs,
  subcategories: state.categories.subcategories
});

const mapDispatchToProps = dispatch => ({
  register: (url, obj) => dispatch(forumPostData(url, obj)),
  dispatchSubs: subs => dispatch(categoriesGetSubs(subs))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThreadForm);
