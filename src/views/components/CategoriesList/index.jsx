import React from "react";
import PropTypes from "prop-types";
import MyUl from "./ul";
import MyOl from "./ol";
import SubList from "./SubList";

const CategoriesList = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>
          <MyOl>
            {`${i + 1}. ${item.category}`}
            {item.sub !== null ? (
              <SubList parent={i + 1} items={item.sub} />
            ) : null}
          </MyOl>
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
