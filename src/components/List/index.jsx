import React from "react";
import PropTypes from "prop-types";
import UnorderedList from "./UnorderedList";
import OrderedList from "./OrderedList";

const defaultProps = {
	list: []
};

const propTypes = {
	OrderedList: PropTypes.arrayOf(
		PropTypes.shape({
			usarname: PropTypes.string
		})
	),
	UnorderedList: PropTypes.arrayOf(
		PropTypes.shape({
			usarname: PropTypes.string
		})
	)
};
const List = ({ OrderedList }) => {
	if (OrderedList) {
		return (
			<OrderedList>
				{OrderedList.map(item => (
					<li key={item.username}>{item.username}</li>
				))}
			</OrderedList>
		);
	}
	return (
		<UnorderedList>
			{UnorderedList.map(item => (
				<li key={item.username}>{item.username}</li>
			))}
		</UnorderedList>
	);
};
List.defaultProps = defaultProps;
List.propTypes = propTypes;

export default List;
