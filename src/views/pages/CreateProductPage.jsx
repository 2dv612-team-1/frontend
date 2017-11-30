import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import Field from "../components/Field";
import SelectField from "../components/SelectField";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";
import DropZoneField from "../components/DropZoneField";
import { uploadCreatedProduct } from "../../state/products/actions";

let CreateProductPage = ({ handleSubmit, createProduct }) => {
  const onSubmit = values => {
    const url = "https://nanotu.be/products";
    createProduct(url, values);
  };

  return (
    <PageContainer title="create product">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectField
          label="category"
          name="category"
          type="text"
          options={["test1", "test2", "test3"]}
        />
        <Field label="product name" name="name" component="input" type="text" />
        <Field
          label="serial no."
          name="serialNo"
          component="input"
          type="text"
        />
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
};

CreateProductPage = reduxForm({
  form: "createProduct"
})(CreateProductPage);

const mapDispatchToProps = dispatch => ({
  createProduct: (url, obj) => dispatch(uploadCreatedProduct(url, obj))
});
export default connect(null, mapDispatchToProps)(CreateProductPage);
