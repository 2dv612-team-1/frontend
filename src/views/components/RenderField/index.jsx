import React from "react";
import PropTypes from "prop-types";
import Label from "../../elements/Label";
import Input from "../../elements/Input";
import Textarea from "../../elements/Textarea";
import Text from "../../elements/Text";

const propTypes = {
  input: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
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

RenderField.propTypes = propTypes;
export default RenderField;
