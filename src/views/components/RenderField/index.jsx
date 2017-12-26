import React from "react";
import Label from "../../elements/Label";
import Input from "../../elements/Input";
import Textarea from "../../elements/Textarea";
import Text from "../../elements/Text";

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

export default RenderField;
