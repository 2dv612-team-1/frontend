import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import { performLogin } from "../../state/session/actions";
import Button from "../components/Button";
import Form from "../elements/Form";
import Field from "../components/Field";
import RenderField from "../components/RenderField";

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  admin: PropTypes.string.isRequired
};

const validate = values => {
  const errors = {};
  !values.username ? errors.username = "Required" : null;
  !values.password ? errors.password = "Required" : null;
  return errors;
};

let LoginForm = ({ handleSubmit, login, admin }) => {
  const onSubmit = values => {
    let url = `${API_HOST}/auth`;
    if (admin === "true") {
      url = `${API_HOST}/admins/auth`;
    }
    login(url, values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field label="username" name="username" component={RenderField} type="text" />
      <Field
        label="password"
        name="password"
        component={RenderField}
        type="password"
      />
      <Button form>Login</Button>
    </Form>
  );
};

LoginForm.propTypes = propTypes;

LoginForm = reduxForm({
  form: "login",
  validate
})(LoginForm);

const mapDispatchToProps = dispatch => ({
  login: (url, obj) => dispatch(performLogin(url, obj))
});

export default connect(null, mapDispatchToProps)(LoginForm);
