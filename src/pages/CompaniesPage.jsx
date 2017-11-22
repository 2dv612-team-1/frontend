import React, { Component } from "react";
import { Link } from "react-router-dom";
import Text from "../elements/Text";
import Modal from "../components/Modal";
import PageTitle from "../components/PageTitle";
import List from "../components/List";
import ErrorMessage from "../components/ErrorMessage";
import Client from "../libs/Client";
import Button from "../components/Button";

class CompaniesPage extends Component {
  state = {
    error: "",
    data: []
  };

  componentDidMount() {
    const url = "https://nanotu.be/companies";
    Client.GET(url)
      .then(data => {
        this.setState({ data: data.companies });
      })
      .catch(() => {
        this.setState({ error: "Could not load data" });
      });
  }

  render() {
    return (
      <Modal>
        <PageTitle>Companies</PageTitle>
        <Link to="/register/company">
          <Button>Register Company</Button>
        </Link>
        <Text>All companies:</Text>
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

export default CompaniesPage;
