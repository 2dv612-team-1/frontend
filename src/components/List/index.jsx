import React from "react";
import PropTypes from "prop-types";
import UnorderedList from "./UnorderedList";
import OrderedList from "./OrderedList";

const defaultProps = {
	OrderedList: [],
	UnorderedList: []
};

const propTypes = {
	OrderedList: PropTypes.arrayOf(
		PropTypes.shape({
			listItem: PropTypes.string
		})
	),
	UnorderedList: PropTypes.arrayOf(
		PropTypes.shape({
			listItem: PropTypes.string
		})
	)
};
const List = ({ OrderedList }) => {
	if (OrderedList) {
		return (
			<OrderedList>
				{OrderedList.map(item => (
					<li key={item.listItem}>{item.listItem}</li>
				))}
			</OrderedList>
		);
	}
	return (
		<UnorderedList>
			{UnorderedList.map(item => (
				<li key={item.listItem}>{item.listItem}</li>
			))}
		</UnorderedList>
	);
};
List.defaultProps = defaultProps;
List.propTypes = propTypes;
