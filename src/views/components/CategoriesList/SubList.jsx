import React from "react";
import UnorderedList from "../../elements/UnorderedList";

const SubList = ({ parent, items }) => {
  const list = items.map((item, i) => (
    <li>{`${parent}.${i + 1}. ${item.category}`}</li>
  ));

  return (
    <UnorderedList styleType="none" marginLeft={60}>
      {list}
    </UnorderedList>
  );
};

export default SubList;
