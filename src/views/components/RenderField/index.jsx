import React from "react";
import Label from "../../elements/Label";
import Input from "../../elements/Input";
import Text from "../../elements/Text";

const RenderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <Label>{label}</Label>
    <div>
      <Input {...input} placeholder={label} type={type} />
      {touched && (error && <Text error center>{error}</Text>)}
    </div>
  </div>
);

export default RenderField;
