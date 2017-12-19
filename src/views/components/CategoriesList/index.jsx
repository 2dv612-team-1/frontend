import React from "react";
import PropTypes from "prop-types";
import OrderedList from "../../elements/OrderedList";
import UnorderedList from "../../elements/UnorderedList";

const CategoriesList = ({ items }) => {
  return (
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
};

export default CategoriesList;
