import React, { Component } from "react";
import { Link } from "react-router-dom";
import Text from "../elements/Text";
import Modal from "../components/Modal";
import PageTitle from "../components/PageTitle";
import List from "../components/List";
import ErrorMessage from "../components/ErrorMessage";
import Client from "../libs/Client";

class RepresentativesPage extends Component {
  state = {
    error: "",
    data: []
  };

  componentDidMount() {
    const url = "https://nanotu.be/representatives?token=";
    Client.GET(url)
      .then(data => {
        this.setState({ data: data.representatives });
      })
      .catch(err => {
        this.setState({ error: "Could not load data" });
        console.log(err);
      });
  }

  render() {
    return (
      <Modal>
        <PageTitle>Representative</PageTitle>
        <Text>representatives...</Text>
        <Link to="/register/representative">
          <SubmitButton>Create New Representative</SubmitButton>
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

export default RepresentativesPage;
