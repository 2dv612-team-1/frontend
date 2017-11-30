import React from "react";
import PropTypes from "prop-types";
import UnorderedList from "./UnorderedList";
import OrderedList from "./OrderedList";

const defaultProps = {
  list: [],
  ordered: false
};

const propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string
    }),
    PropTypes.bool.isRequired
  ),
  ordered: PropTypes.bool
};

const List = ({ list, ordered }) => {
  return ordered ? (
    <OrderedList>
      {list.map(item => <li key={item.username}>{item.username}</li>)}
    </OrderedList>
  ) : (
    <UnorderedList>
      {list.map(item => <li key={item.username}>{item.username}</li>)}
    </UnorderedList>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
export default List;
