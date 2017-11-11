import React, { Component } from 'react';
import Text from '../elements/Text';
import Modal from '../components/Modal';
import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
  state = {
    fields: {
      username: '',
      password: '',
    },
  }

  onChange = (event) => {
    const fields = Object.assign({}, this.state.fields);
    fields[event.target.name] = event.target.value;
    this.setState({ fields });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const fields = {
      username: '',
      password: '',
    };

    this.setState({ fields });
  }

  render() {
    return (
      <Modal>
        <Text center>Här kan du logga in...</Text>
        <LoginForm fields={this.state.fields} onChange={this.onChange} onSubmit={this.onSubmit} />
      </Modal>
    );
  }
}

export default LoginPage;
