import React from "react";
import PropTypes from "prop-types";
import MyUl from "./ul";
import MyOl from "./ol";
import SubList from "./SubList"

const CategoriesList = ({ items }) => (
  <div className="catslist">
    {items.map((item, index) => {
      let i = index + 1;
      const space = ". ";
      return (
        <div key={i}>
          <MyOl>
            {i}
            {space}
            {item.category}
          </MyOl>
          {item.sub !== null
            ? <SubList parent={i} items={item.sub} />
            : null}
        </div>
      );
    })}
  </div>
);

export default CategoriesList;
