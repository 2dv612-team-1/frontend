import React from "react";
import { reduxForm } from "redux-form";
import Field from "../components/Field";
import SelectField from "../components/SelectField";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";
import DropZoneField from "../components/DropZoneField";

let CreateProductPage = () => (
  <PageContainer title="create product">
    <form>
      <SelectField
        label="category"
        name="category"
        type="text"
        options={["test1", "test2", "test3"]}
      />
      <Field label="title" name="title" component="input" type="text" />
      <Field
        label="description"
        name="description"
        component="input"
        type="text"
      />
      <Field name="files" component={DropZoneField} />
      <Button submit>create</Button>
    </form>
  </PageContainer>
);

CreateProductPage = reduxForm({
  form: "createProduct"
})(CreateProductPage);

export default CreateProductPage;
