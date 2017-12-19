import React from "react";
import PropTypes from "prop-types";
import Anchor from "./Anchor";


const defaultProps = {
  href: "#",
  name: "Link"
}

const propTypes = {
  href: Proptypes.string,
  name: PropTypes.string
}

const Link = ({ href, name, newWindow }) => (
  <Anchor target={newWindow ? "_blank" : "_self"} href={href}>
    {name}
  </Anchor>
);

Link.defaultProps = defaultProps;
Link.propTypes = propTypes;
export default Link;
