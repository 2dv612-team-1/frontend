import React, { Component }  from 'react';
import Text from '../elements/Text';
import Modal from '../components/Modal';
import PageTitle from '../elements/PageTitle';
import List from '../components/List';

class CompaniesPageState extends Component {
    state = { data: [] };

    componentDidMount() {
      fetch('data.json')
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.setState({ data: json });
        });
    }

    render() {
      return (
        <Modal>
          <PageTitle>Companies</PageTitle>
          <Text>Bla bla bla</Text>
          <List list={this.state.data} />
        </Modal>
      );
    }
}

export default CompaniesPageState;
