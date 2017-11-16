import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    usarname: PropTypes.string.isRequired,
    /* id: PropTypes.number.isRequired, */
  }).isRequired).isRequired,
};


const List = ({ list }) => (
  <ol>
    {list.map(item =>
      <li key={item.username}>{ item.username }</li>)}
  </ol>
);

List.propTypes = propTypes;

export default List;
