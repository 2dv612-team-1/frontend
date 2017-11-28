import React from "react";
import PropTypes from "prop-types";
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

const List = ({ list }) => (
	<OrderedList>
		{list.map(item => <li key={item.username}>{item.username}</li>)}
	</OrderedList>
);

List.defaultProps = defaultProps;
List.propTypes = propTypes;

export default List;
