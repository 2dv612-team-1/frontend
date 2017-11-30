import React from "react";
import PropTypes from "prop-types";
import UnorderedList from "./UnorderedList";
import OrderedList from "./OrderedList";

const OrderedList{
	OrderedList: false
}
const UnorderedList{
	UnorderedList: true
}

const propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			listItem: PropTypes.string
		}),
		PropTypes.bool.isRequired
	)
};
const List = ({ list }) => {
	if (OrderedList) {
		return (
			<OrderedList>
				{list.map(item => (
					<li key={item.listItem}>{item.listItem}</li>
				))}
			</OrderedList>
		);
	}
	return (
		<UnorderedList>
			{list.map(item => (
				<li key={item.listItem}>{item.listItem}</li>
			))}
		</UnorderedList>
	);
};
List.OrderedList = OrderedList;
List.UnorderedList = UnorderedList;
List.propTypes = propTypes;

export default List;