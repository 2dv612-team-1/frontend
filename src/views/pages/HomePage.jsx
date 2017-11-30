import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PageContainer from "../components/PageContainer";

const propTypes = {
  loggedInAs: PropTypes.string.isRequired
};

const HomePage = ({ loggedInAs }) => (
  <PageContainer title={`welcome ${loggedInAs}`} />
);

const mapStateToProps = state => ({
  loggedInAs: state.session.loggedInAs.username
});

HomePage.propTypes = propTypes;
export default connect(mapStateToProps)(HomePage);
