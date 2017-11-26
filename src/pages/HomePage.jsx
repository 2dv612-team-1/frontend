import React from "react";
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

const HomePage = ({ auth }) => (
  <Modal>
    <PageTitle>
      Welcome {auth ? Jwt.getUsername(Auth.getToken()) : null}
    </PageTitle>
  </Modal>
);

HomePage.defaultProps = defaultProps;
HomePage.propTypes = propTypes;
export default HomePage;
