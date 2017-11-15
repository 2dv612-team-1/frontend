import React from 'react';
import Text from '../elements/Text';
import Modal from '../components/Modal';
import PageTitle from '../elements/PageTitle';
import List from '../components/List';

const companies = [
  { name: 'Bosch', id: 120 }, { name: 'Siemens', id: 443 }, { name: 'Nord', id: 510 },
];

const CompaniesPage = () => (
  <Modal>
    <PageTitle>Companies</PageTitle>
    <Text>Bla bla bla</Text>
    <List list={companies} />
  </Modal>
);

export default CompaniesPage;
