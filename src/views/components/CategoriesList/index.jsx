import React from "react";
import PropTypes from "prop-types";
import OrderedList from "../../elements/OrderedList";
import UnorderedList from "../../elements/UnorderedList";

const CategoriesList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <OrderedList styleType="none" key={i}>
          {`${i + 1}. ${item.category}`}
          <UnorderedList styleType="none" marginLeft={60}>
            {item.sub !== null ? (
              items.map((item, subIndex) => (
                <li>{`${index + 1}.${subIndex + 1}. ${item.category}`}</li>
              ));
            ) : null}
          </UnorderedList>
        </OrderedList>
      ))}
    </div>
  );
};

export default CategoriesList;
