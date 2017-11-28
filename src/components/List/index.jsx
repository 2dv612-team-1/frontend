import React from "react";
import PropTypes from "prop-types";
import UnorderedList from "./UnorderedList";
import OrderedList from "./OrderedList";

const defaultProps = {
	OrderedList: false
};

const propTypes = {
	OrderedList: PropTypes.arrayOf(
		PropTypes.shape({
			listItem: PropTypes.string
		}),
		PropTypes.bool.isRequired
	),
	UnorderedList: PropTypes.arrayOf(
		PropTypes.shape({
			listItem: PropTypes.string
		}),
		PropTypes.bool.isRequired
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
