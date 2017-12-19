import React from "react";
import PropTypes from "prop-types";
import MyUl from "./ul";
import MyOl from "./ol";
import SubList from "./SubList";

const CategoriesList = ({ items }) => {
  <div>
    {items.map((item, index) => {
        <div key={i}>
          <MyOl>
            {`${i + 1 }. ${item.category}`}
          </MyOl>
          {item.sub !== null ? <SubList parent={i} items={item.sub} /> : null}
        </div>
    })}
  </div>;
};

export default CategoriesList;
