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
const CategoriesList = ({ items }) => (
  <OrderedList styleType="none">
    {items.map((item, index) => (
      <div>
        <li>{`${index + 1}. ${item.category}`}</li>
        <UnorderedList styleType="none" marginLeft={60}>
          {item.sub !== null
            ? items.map((subItem, subIndex) => (
                <li>{`${index + 1}.${subIndex + 1}. ${subItem.category}`}</li>
              ))
            : null}
        </UnorderedList>
      </div>
    ))}
  </OrderedList>
);

CategoriesList.propTypes = propTypes;
export default CategoriesList;
