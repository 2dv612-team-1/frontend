import React from "react";
import PropTypes from "prop-types";
import Label from "../../elements/Label";
import Input from "../../elements/Input";
import Textarea from "../../elements/Textarea";
import Text from "../../elements/Text";

const defaultProps = {
  label: ""
};

const propTypes = {
  input: PropTypes.shape({}).isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  componentClass: PropTypes.element.isRequired,
  meta: PropTypes.shape({}).isRequired
};

const RenderField = ({
  input,
  label,
  type,
  componentClass,
  meta: { touched, error }
}) => (
  <div>
    <Label>{label}</Label>
    <div>
      {componentClass === "textarea" ? (
        <Textarea {...input} placeholder={label} type={type} />
      ) : (
        <Input {...input} placeholder={label} type={type} />
      )}
      {touched &&
        (error && (
          <Text error center>
            {error}
          </Text>
        ))}
    </div>
  </div>
);

RenderField.defaultProps = defaultProps;
RenderField.propTypes = propTypes;
export default RenderField;
