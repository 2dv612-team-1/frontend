import React, { Component } from "react";
import { Link } from "react-router-dom";
import Text from "../elements/Text";
import Modal from "../components/Modal";
import PageTitle from "../components/PageTitle";
import List from "../components/List";
import ErrorMessage from "../components/ErrorMessage";
import Client from "../libs/Client";

class ProductsPage extends Component {
  state = {
    error: "",
    data: []
  };

  componentDidMount() {
    const url = "https://nanotu.be/products";
    Client.GET(url)
      .then(data => {
        this.setState({ data: data.products });
      })
      .catch(() => {
        this.setState({ error: "Could not load data" });
      });
  }

  render() {
    return (
      <Modal>
        <PageTitle>Products</PageTitle>
        <Text>All products:</Text>
        {this.state.data ? (
          <List list={this.state.data} />
        ) : (
          <Text>Loading...</Text>
        )}
        <ErrorMessage>{this.state.error}</ErrorMessage>
      </Modal>
    );
  }
}

export default ProductsPage;
