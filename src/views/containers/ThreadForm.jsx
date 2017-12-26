import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import { forumPostData, forumHasError } from "../../state/forum/actions";
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
  categories: PropTypes.arrayOf(PropTypes.shape({}))
};

const validate = values => {
  // console.log(values);
  const errors = {};
  // !values.category || values.category === "Select" ? errors.title = "Required" : null;
  // !values.productName ? errors.productName = "Required" : null;
  !values.title ? (errors.title = "Required") : null;
  !values.message ? (errors.message = "Required") : null;
  return errors;
};

let ThreadForm = ({
  loggedInAs,
  handleSubmit,
  register,
  dispatchSubs,
  showError,
  categories,
  subcategories
}) => {
  const parents = categories.map(cat => cat.category);

  const getSubs = parent => {
    const cat = categories.filter(item =>
      item.category.toLowerCase().includes(parent.toLowerCase())
    );
    const subs = cat[0].sub.map(item => item.category);
    dispatchSubs(subs);
  };

  const onSubmit = values => {
    const data = values;
    data.jwt = loggedInAs.jwt;
    console.log(data);
    if (values.category === "Select" || !values.category) {
      showError(true, "You have to select a Category");
    } else {
      showError(false, "");
      register(`${API_HOST}/threads`, data, `${API_HOST}/threads`);
    }
  };

  const onChange = event => {
    const val = event.target.value;
    // console.log(val);
    getSubs(val);
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
      <Field
        label="product"
        name="product"
        component={RenderField}
        type="text"
      />
      <Field label="title" name="title" component={RenderField} type="text" />
      <Field
        label="message"
        name="message"
        component={RenderField}
        type="text"
        componentClass="textarea"
      />
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
  register: (urlPost, obj, urlFetch) =>
    dispatch(forumPostData(urlPost, obj, urlFetch)),
  dispatchSubs: subs => dispatch(categoriesGetSubs(subs)),
  showError: (bool, msg) => dispatch(forumHasError(bool, msg))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThreadForm);
