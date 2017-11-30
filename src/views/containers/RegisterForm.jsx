import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { registerPostData } from "../../state/register/actions";
import Button from "../components/Button";
import Form from "../elements/Form";
import Auth from "../../libs/Auth";
import Jwt from "../../libs/Jwt";
import Field from "../components/Field";

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired
};

let RegisterForm = ({ handleSubmit, register, role }) => {
  const onSubmit = values => {
    let url = "";
    switch (role) {
      case "admin":
        url = "https://nanotu.be/admins";
        break;
      case "representative":
        const company = Jwt.getUsername(Auth.getToken());
        url = `https://nanotu.be/companies/${company}/representatives`;
        break;
      case "company":
        url = "https://nanotu.be/companies";
        break;
      case "customer":
        url = "https://nanotu.be/consumers";
        break;
      default:
        url = "https://nanotu.be/consumers";
        break;
    }
    register(url, values);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field label="username" name="username" component="input" type="text" />
      <Field label="password" name="password" component="input" type="text" />
      <Button form>Register</Button>
    </Form>
  );
};

RegisterForm.propTypes = propTypes;

RegisterForm = reduxForm({
  form: "register"
})(RegisterForm);

const mapDispatchToProps = dispatch => ({
  register: (url, obj) => dispatch(registerPostData(url, obj))
});

export default connect(null, mapDispatchToProps)(RegisterForm);
