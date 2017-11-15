import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};


const List = ({ list }) => (
  <ol>
    {list.map((item) =>
      <li key={item.id}>{ item.name }</li>,
    )}
  </ol>
);

List.propTypes = propTypes;

export default List;
