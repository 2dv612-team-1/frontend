import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { API_HOST } from "../../libs/API_CONFIG";
import Text from "../elements/Text";
import Field from "../components/Field";
import SelectField from "../components/SelectField";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";
import DropZoneField from "../components/DropZoneField";
import { uploadCreatedProduct } from "../../state/products/actions";
import { categoriesFetchData } from "../../state/categories/actions";

class CreateProductPage extends Component {
  componentDidMount() {
    this.props.fetchData(`${API_HOST}/categories`);
  }

  onSubmit = values => {
    const url = `${API_HOST}/products`;
    this.props.createProduct(url, values);
  };

  render() {
    const cat = this.props.categories.map(cat => cat.category)
    return (
      <PageContainer title="create product">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <SelectField
            label="category"
            name="category"
            type="text"
            options={cat}
          />
          <Field
            label="product name"
            name="name"
            component="input"
            type="text"
          />
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
          {this.props.isLoading ? <Text>Loading...</Text> : null}
          {this.props.successMessage ? <Text success>Product was created</Text> : null}
          {this.props.hasError ? <Text error>Could not load data</Text> : null}
        </form>
      </PageContainer>
    );
  }
}

CreateProductPage = reduxForm({
  form: "createProduct"
})(CreateProductPage);

const mapStateToProps = state => ({
  categories: state.categories.categories,
  isLoading: state.products.isLoading,
  errorMessage: state.products.productsHasError.errorMessage,
  successMessage: state.products.productsPostDataSuccess.successMessage
});

const mapDispatchToProps = dispatch => ({
  createProduct: (url, obj) => dispatch(uploadCreatedProduct(url, obj)),
  fetchData: url => dispatch(categoriesFetchData(url))
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateProductPage);
