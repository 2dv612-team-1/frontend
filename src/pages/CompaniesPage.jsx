import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Text from '../elements/Text';
import Modal from '../components/Modal';
import PageTitle from '../elements/PageTitle';
import List from '../components/List';
import SubmitButton from '../components/SubmitButton';
import ErrorMessage from '../components/ErrorMessage';


class CompaniesPage extends Component {
    state = { error: '' };


    componentDidMount() {
      const url = 'https://jsonplaceholder.typicode.com/users'; // TODO: change to the actual url
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error('Request failed');
          }
          return response.json();
        })
        .then((json) => {
          this.setState({ data: json });
        }, () => {
          this.setState({ error: 'The data failed to load' });
        });
    }

    render() {
      if (!this.state.data) {
        return (
          <Modal>
            <PageTitle>Companies</PageTitle>
            <Text>Bla bla bla</Text>
            <Link to="/register">
              <SubmitButton>Create New Company</SubmitButton>
            </Link>
            <p>Loading...</p>
            <ErrorMessage>{this.state.error}</ErrorMessage>
          </Modal>
        );
      }
      return (
        <Modal>
          <PageTitle>Companies</PageTitle>
          <Text>Bla bla bla</Text>
          <Link to="/register">
            <SubmitButton>Create New Company</SubmitButton>
          </Link>
          <List list={this.state.data} />
          <ErrorMessage>{this.state.error}</ErrorMessage>
        </Modal>
      );
    }
}

export default CompaniesPage;
