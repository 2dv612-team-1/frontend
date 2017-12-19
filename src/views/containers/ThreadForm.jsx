import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import { forumPostData } from "../../state/forum/actions";
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
  categories: PropTypes.arrayOf(PropTypes.string)
};

const validate = values => {
  const errors = {};
  !values.category ? errors.category = "Required" : null;
  return errors;
};

let ThreadForm = ({ loggedInAs, handleSubmit, register, categories }) => {
  const parents = categories.map(cat => cat.category);

  const getSubs = parent => {
    const cat = this.props.categories.filter(item =>
      item.category.toLowerCase().includes(parent.toLowerCase())
    );
    return cat.sub.map(item => item.category);
  };

  const onSubmit = values => {
    const data = values;
    data.jwt = loggedInAs.jwt;
    if (data.parent === undefined || data.parent === "Choose parent category") {
      register(`${API_HOST}/categories`, data);
    } else {
      register(`${API_HOST}/categories/${data.parent}/subcategories`, data);
    }
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SelectField
        label="category"
        name="category"
        type="text"
        options={parents}
        onChange={event => {
          parents.onChange(event);
          getSubs(event.target.value);
        }}
      />
      <SelectField
        label="sub category"
        name="sub"
        type="text"
        options={parents}
      />
      <Field label="name" name="category" component={RenderField} type="text" />
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
  loggedInAs: state.session.loggedInAs
});

const mapDispatchToProps = dispatch => ({
  register: (url, obj) => dispatch(forumPostData(url, obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThreadForm);
