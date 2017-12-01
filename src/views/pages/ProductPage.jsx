import React, { Component } from "react";
import { connect } from "react-redux";
import PageContainer from "../components/PageContainer";

const ProductPage = ({ id, products }) => {
  const product = products.filter(product => product._id === id);

  return (
    <PageContainer title={product.name}>
      <p>Name: {product.name}</p>
      <p>Category: {product.category}</p>
      <p>Created By: {product.createdBy}</p>
      <p>Description: {product.description}</p>
      <p>Producer: {product.producer}</p>
      <p>Serial No: {product.serialNo}</p>
      {/*product.files.map(file => <a href="https://nanotu.be{file}">{file}</a>)*/}
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps)(ProductPage);
