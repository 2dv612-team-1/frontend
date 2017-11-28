import React from "react";
import PropTypes from "prop-types";
import UnorderedList from "./UnorderedList";
import OrderedList from "./OrderedList";

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
const List = ({ list }) => {
	if (OrderedList) {
		return (
			<OrderedList>
				{list.map(item => <li key={item.username}>{item.username}</li>)}
			</OrderedList>
		);
	}
	return (
		<UnorderedList>
			{list.map(item => <li key={item.username}>{item.username}</li>)}
		</UnorderedList>
	);
};
List.defaultProps = defaultProps;
List.propTypes = propTypes;
