import React from "react";
import PropTypes from "prop-types";

const defaultProps = {
  list: []
};

const propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      usarname: PropTypes.string.isRequired
    }).isRequired
  )
};

const List = ({ list }) => (
  <ol>{list.map(item => <li key={item.username}>{item.username}</li>)}</ol>
);

List.defaultProps = defaultProps;
List.propTypes = propTypes;

export default List;
