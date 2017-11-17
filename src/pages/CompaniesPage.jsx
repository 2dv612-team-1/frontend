import React, { Component } from "react";
import { Link } from "react-router-dom";
import Text from "../elements/Text";
import Modal from "../components/Modal";
import PageTitle from "../elements/PageTitle";
import List from "../components/List";
import SubmitButton from "../components/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";
import Client from "../libs/Client";

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
        <Text>companies...</Text>
        <Link to="/register/company">
          <SubmitButton>Create New Company</SubmitButton>
        </Link>
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
