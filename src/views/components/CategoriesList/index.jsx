import React from "react";
import PropTypes from "prop-types";
import OrderedList from "../../elements/OrderedList";
import UnorderedList from "../../elements/UnorderedList";

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

/*
eslint-disable react/jsx-indent
 */
const CategoriesList = ({ items }) => {
  const subLists = items.map(
    (item, index) =>
      item.sub === null
        ? []
        : item.sub.map((subItem, subIndex) => (
            <li>{`${index + 1}.${subIndex + 1}. ${subItem.category}`}</li>
          ))
  );

  return (
    <OrderedList styleType="none">
      {items.map((item, index) => (
        <div>
          <li>{`${index + 1}. ${item.category}`}</li>
          <UnorderedList styleType="none" marginLeft={60}>
            {subLists[index]}
          </UnorderedList>
        </div>
      ))}
    </OrderedList>
  );
};

CategoriesList.propTypes = propTypes;
export default CategoriesList;
