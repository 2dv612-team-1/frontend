import React from "react";
import PropTypes from "prop-types";
import UnorderedList from "./UnorderedList";
import OrderedList from "./OrderedList";

const defaultProps = {
  OrderedList: [],
  UnorderedList: []
};

const propTypes = {
<<<<<<< HEAD
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
=======
  list: PropTypes.arrayOf(
    PropTypes.shape({
      usarname: PropTypes.string
    })
  )
>>>>>>> b7b56c8d67830a69c2898f2952f0bae9c58f5b96
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
