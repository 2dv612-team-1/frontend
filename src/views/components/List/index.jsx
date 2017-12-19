import React from "react";
import PropTypes from "prop-types";
import UnorderedList from "./UnorderedList";
import OrderedList from "./OrderedList";

const defaultProps = {
  list: [],
  ordered: false,
  type: ""
};

const userShape = PropTypes.shape({
  username: PropTypes.string
});

const categoryShape = PropTypes.shape({
  category: PropTypes.string,
  sub: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string
    })
  )
});

const productShape = PropTypes.shape({
  name: PropTypes.string
});

const propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.oneOfType([userShape, categoryShape, productShape])
  ),
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
