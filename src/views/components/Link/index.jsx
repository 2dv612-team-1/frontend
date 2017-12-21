import React from "react";
import PropTypes from "prop-types";
import Anchor from "./Anchor";

const defaultProps = {
  href: "#",
  name: "Link",
  newWindow: false
};

const propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
  newWindow: PropTypes.bool
};

const Link = ({ href, name, newWindow }) => (
  <Anchor target={newWindow ? "_blank" : "_self"} href={href}>
    {name}
  </Anchor>
);

Link.defaultProps = defaultProps;
Link.propTypes = propTypes;
export default Link;
