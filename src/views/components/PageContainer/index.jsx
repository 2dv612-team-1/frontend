import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";
import PageTitle from "../PageTitle";

const defaultProps = {
  title: "Title"
};

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired
};

const PageContainer = ({ title, children }) => (
  <Modal>
    <PageTitle center>{title}</PageTitle>
    {children}
  </Modal>
);

PageContainer.defaultProps = defaultProps;
PageContainer.propTypes = propTypes;
export default PageContainer;