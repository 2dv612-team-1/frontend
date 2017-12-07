import React from "react";
import PropTypes from "prop-types";

const ListCategories = ({ items }) => {
  console.log(items);
  return (
    <div className="catslist">
      {items.map((item, index) => {
        return (
          <div key={index}>
            <ul>{item.category}</ul>
            {item.sub !== null
              ? item.sub.map((subitem, i) => {
                  return (
                    <ul key={i}>
                      <li>{subitem.category}</li>
                    </ul>
                  );
                })
              : null}
          </div>
        );
      })}
    </div>
  );
};

export default ListCategories;
