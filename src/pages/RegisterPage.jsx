import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Text from '../elements/Text';
import Modal from '../components/Modal';
// import LoginForm from '../components/LoginForm';
import Client from '../libs/Client';

class RegisterPage extends Component {
  state = {
    fields: {
      username: '',
      password: '',
    },
    redirect: false,
  }

  onChange = (event) => {
    const fields = Object.assign({}, this.state.fields);
    fields[event.target.name] = event.target.value;
    this.setState({ fields });
  }

  registerAdmin = () => {
    const url = 'https://nanotu.be/admins';
    Client.POST(url)
      .then(() => { this.setState({ redirect: true }); })
      .catch((error) => { console.log(error); });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    switch (event.target.name) {
      case 'admin':
        this.registerAdmin();
        break;
      default:
    }
    // Reset state
    const fields = {
      username: '',
      password: '',
    };
    this.setState({ fields });
  }

  render() {
    return (
      <Modal>
        <Text center>Här kan du registrera dig...</Text>
        <button name="admin" onClick={this.handleSubmit}>Registrera</button>
        {
          this.state.redirect
          ? <Redirect to="/login" />
          : null
        }
      </Modal>
    );
  }
}

// <LoginForm fields={this.state.fields} onChange={this.onChange} onSubmit={this.onSubmit} />

export default RegisterPage;
