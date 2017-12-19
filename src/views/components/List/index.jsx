import React from "react";
import PropTypes from "prop-types";
import UnorderedList from "../../elements/UnorderedList";
import OrderedList from "../../elements/OrderedList";

const defaultProps = {
  list: [],
  ordered: false,
  type: ""
};

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
  ordered: PropTypes.bool,
  type: PropTypes.string
};

const List = ({ list, ordered, type }) =>
  ordered ? (
    <OrderedList>
      {list.map(item => <li key={item[type]}>{item[type]}</li>)}
    </OrderedList>
  ) : (
    <UnorderedList>
      {list.map(item => <li key={item[type]}>{item[type]}</li>)}
    </UnorderedList>
  );

List.propTypes = propTypes;
List.defaultProps = defaultProps;
export default List;
