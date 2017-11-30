import React, { Component } from "react";
import { Link } from "react-router-dom";
import Text from "../elements/Text";
import List from "../components/List";
import ErrorMessage from "../components/ErrorMessage";
import Client from "../../libs/Client";
import Auth from "../../libs/Auth";
import Jwt from "../../libs/Jwt";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";

class RepresentativesPage extends Component {
  state = {
    error: "",
    data: []
  };

  componentDidMount() {
    // https://nanotu.be/companies/{company-name}/representatives
    const company = Jwt.getUsername(Auth.getToken());
    const url = `https://nanotu.be/companies/${company}/representatives`;
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
<<<<<<< HEAD:src/views/pages/RepresentativesPage.jsx
      <PageContainer title="representatives">
        <Text>representatives...</Text>
=======
      <Modal>
        <PageTitle>Representative</PageTitle>
>>>>>>> product:src/pages/RepresentativesPage.jsx
        <Link to="/register/representative">
          <Button>Create New Representative</Button>
        </Link>
        <Text>All representatives:</Text>
        {this.state.data ? (
          <List list={this.state.data} />
        ) : (
          <Text>Loading...</Text>
        )}
        <ErrorMessage>{this.state.error}</ErrorMessage>
      </PageContainer>
    );
  }
}

export default RepresentativesPage;
