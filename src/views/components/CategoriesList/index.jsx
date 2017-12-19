import React from "react";
import PropTypes from "prop-types";
import OrderedList from "../../elements/OrderedList";
import SubList from "./SubList";

const CategoriesList = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => (
        <OrderedList styleType="none" key={i}>
          {`${i + 1}. ${item.category}`}
          {item.sub !== null ? (
            <SubList parent={i + 1} items={item.sub} />
          ) : null}
        </OrderedList>
      ))}
    </div>
  );
};

export default CategoriesList;
