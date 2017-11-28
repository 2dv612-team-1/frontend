import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PageTitle from "../components/PageTitle";
import Modal from "../components/Modal";

const propTypes = {
  loggedInAs: PropTypes.string.isRequired
};

const HomePage = ({ loggedInAs }) => (
  <Modal>
    <PageTitle center>Welcome {loggedInAs}</PageTitle>
  </Modal>
);

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs.role
});

HomePage.propTypes = propTypes;
export default connect(mapStateToProps)(HomePage);
