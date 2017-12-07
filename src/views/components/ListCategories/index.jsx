import React from "react";
import PropTypes from "prop-types";

const ListCategories = ({ items }) => {
  const list = items.map(
    item =>
      item.sub === null ? (
        <li>{item.category}</li>
      ) : (
        <ol>{item.sub.map(s => <li>{s}</li>)}</ol>
      )
  );

  return <ul>{list}</ul>;
};

export default ListCategories;