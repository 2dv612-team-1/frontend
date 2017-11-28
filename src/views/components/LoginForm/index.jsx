import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { performLogin } from "../../../state/session/actions";
import Button from "../Button";
import Form from "../../elements/Form";
import Field from "../../components/Field";

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  admin: PropTypes.string.isRequired
};

let LoginForm = ({ handleSubmit, login, admin }) => {
  const onSubmit = values => {
    let url = "https://nanotu.be/auth";
    if (admin === "true") {
      url = "https://nanotu.be/admins/auth";
    }
    login(url, values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field label="username" name="username" component="input" type="text" />
      <Field label="password" name="password" component="input" type="text" />
      <Button form>Login</Button>
    </Form>
  );
};

LoginForm.propTypes = propTypes;

LoginForm = reduxForm({
  form: "login"
})(LoginForm);

const mapDispatchToProps = dispatch => ({
  login: (url, obj) => dispatch(performLogin(url, obj))
});

export default connect(null, mapDispatchToProps)(LoginForm);
