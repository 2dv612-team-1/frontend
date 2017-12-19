import React from "react";
import MyUl from "./ul";

const SubList = ({ parent, items }) => {
  const list = items.map((item, i) => (
    <li>{`${parent}.${i + 1}. ${item.category}`}</li>
  ));

  return <MyUl>{list}</MyUl>;
};

export default SubList;
