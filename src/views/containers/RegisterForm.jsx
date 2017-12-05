import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import { registerPostData } from "../../state/register/actions";
import Button from "../components/Button";
import Form from "../elements/Form";
import Field from "../components/Field";

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  loggedInAs: PropTypes.string.isRequired,
};

let RegisterForm = ({ loggedInAs, handleSubmit, register, role }) => {
  const onSubmit = values => {
    console.log("role");
    console.log(role);
    let json = values;
    loggedInAs.jwt !== undefined ? (json.jwt = loggedInAs.jwt) : null;
    let url = `${API_HOST}/consumers`;
    switch (role) {
      case "company":
        const company = loggedInAs.username;
        url = `${API_HOST}/companies/${company}/representatives`;
        break;
      case "admin":
        url = `${API_HOST}/companies`;
        break;
      case "customer":
        url = `${API_HOST}/consumers`;
        break;
      case "category":
        url = `${API_HOST}/categories`;
        break;
      default:
    }
    register(url, json);
  };

  return role === "category" ? (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field label="name" name="name" component="input" type="text" />
      <Button form>Create</Button>
    </Form>
  ) : (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field label="username" name="username" component="input" type="text" />
      <Field label="password" name="password" component="input" type="text" />
      <Button form>Register</Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs
});

RegisterForm.propTypes = propTypes;

RegisterForm = reduxForm({
  form: "register"
})(RegisterForm);

const mapDispatchToProps = dispatch => ({
  register: (url, obj) => dispatch(registerPostData(url, obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
