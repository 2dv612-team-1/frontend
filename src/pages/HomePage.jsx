import React, { Component } from "react";
import PropTypes from "prop-types";
import PageTitle from "../components/PageTitle";
import Modal from "../components/Modal";
import Auth from "../libs/Auth";
import Jwt from "../libs/Jwt";

const defaultProps = {
  auth: Auth.isUserAuthenticated()
};

const propTypes = {
  auth: PropTypes.bool
};

class HomePage extends Component {
  render() {
    return (
      <Modal>
        <PageTitle>
          Welcome {this.props.auth ? Jwt.getUsername(Auth.getToken()) : null}
        </PageTitle>
      </Modal>
    );
  }
}

HomePage.defaultProps = defaultProps;
HomePage.propTypes = propTypes;
export default HomePage;
