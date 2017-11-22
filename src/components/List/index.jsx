import React from "react";
import PropTypes from "prop-types";
import OList from "./List";

const defaultProps = {
  list: []
};

const propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      usarname: PropTypes.string
    })
  )
};

const List = ({ list }) => (
  <OList>
    {list.map(item => <li key={item.username}>{item.username}</li>)}
  </OList>
);

List.defaultProps = defaultProps;
List.propTypes = propTypes;

export default List;
