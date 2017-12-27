import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { API_HOST } from "../../libs/API_CONFIG";
import Text from "../elements/Text";
import Field from "../components/Field";
import SelectField from "../components/SelectField";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";
import DropZoneField from "../components/DropZoneField";
import { uploadCreatedProduct } from "../../state/products/actions";
import {
  categoriesFetchData,
  categoriesGetSubs
} from "../../state/categories/actions";
import FieldWrapper from "../components/Field/FieldWrapper";

const defaultProps = {
  isLoading: false,
  hasError: false,
  errorMessage: "",
  successMessage: "",
  handleSubmit: () => {}
};

const propTypes = {
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  fetchData: PropTypes.func.isRequired,
  createProduct: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleSubmit: PropTypes.func,
  subcategories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatchSubs: PropTypes.func.isRequired
};

class CreateProductPage extends Component {
  componentDidMount() {
    this.props.fetchData(`${API_HOST}/categories`);
  }

  onSubmit = values => {
    const url = `${API_HOST}/products`;
    this.props.createProduct(url, values);
  };

  onChange = event => {
    const val = event.target.value;
    this.getSubs(val);
  };

  getSubs = parent => {
    const cat = this.props.categories.filter(item =>
      item.category.toLowerCase().includes(parent.toLowerCase())
    );
    const subs = cat[0].sub.map(item => item.category);
    this.props.dispatchSubs(subs);
  };

  render() {
    const cat = this.props.categories.map(category => category.category);
    // cat.splice(0, 0, "choose");
    return (
      <PageContainer title="create product">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <FieldWrapper>
            <SelectField
              label="category"
              name="category"
              type="text"
              options={cat}
              onChange={this.onChange}
            />
          </FieldWrapper>
          <FieldWrapper>
            <SelectField
              label="sub category"
              name="sub"
              type="text"
              options={this.props.subcategories}
            />
          </FieldWrapper>
          <Field
            label="product name"
            name="name"
            component="input"
            type="text"
          />
          <Field
            label="product no."
            name="productNo"
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
          <FieldWrapper>
            <Button submit>create</Button>
          </FieldWrapper>
          {this.props.isLoading ? <Text>Loading...</Text> : null}
          {this.props.successMessage ? (
            <Text success>Product was created</Text>
          ) : null}
          {this.props.hasError ? (
            <Text error>{this.props.errorMessage}</Text>
          ) : null}
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
  subcategories: state.categories.subcategories,
  isLoading: state.products.isLoading,
  hasError: state.products.productsHasError.hasError,
  errorMessage: state.products.productsHasError.errorMessage,
  successMessage: state.products.productsPostDataSuccess.successMessage
});

const mapDispatchToProps = dispatch => ({
  createProduct: (url, obj) => dispatch(uploadCreatedProduct(url, obj)),
  fetchData: url => dispatch(categoriesFetchData(url)),
  dispatchSubs: subs => dispatch(categoriesGetSubs(subs))
});

CreateProductPage.defaultProps = defaultProps;
CreateProductPage.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(CreateProductPage);
