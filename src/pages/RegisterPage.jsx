import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Text from '../elements/Text';
import Modal from '../components/Modal';
import Client from '../libs/Client';
import Register from '../components/Register';
import Auth from '../libs/Auth';

const defaultProps = {
  match: {
    params: {
      role: 'admin',
    },
  },
};

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      role: PropTypes.string,
    }),
  }),
};

class RegisterPage extends Component {
  state = {
    fields: {
      username: '',
      password: '',
      jwt: Auth.getToken(),
    },
    redirect: false,
  }

  onChange = (event) => {
    const fields = Object.assign({}, this.state.fields);
    fields[event.target.name] = event.target.value;
    this.setState({ fields });
  }

  register = (url) => {
    if (this.props.match.params.role === 'admin') {
      Client.POST(url)
        .then(() => { this.setState({ redirect: true }); })
        .catch((error) => { console.log(error); });
    } else {
      Client.POST(url, this.state.fields)
        .then(() => { this.setState({ redirect: true }); })
        .catch((error) => { console.log(error); });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    switch (this.props.match.params.role) {
      case 'admin':
        this.register('https://nanotu.be/admins');
        break;
      case 'representative':
        this.register('http://nanotu.be/representatives');
        break;
      case 'company':
        this.register('http://nanotu.be/companies');
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
        {
          this.state.redirect
          ? <Redirect to="/login" />
          : <Register
            onSubmit={this.handleSubmit}
            role={this.props.match.params.role}
            onChange={this.onChange}
            fields={this.state.fields}
          />
        }
      </Modal>
    );
  }
}

RegisterPage.defaultProps = defaultProps;
RegisterPage.propTypes = propTypes;
export default RegisterPage;
