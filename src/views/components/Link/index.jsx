import React from "react";
import Anchor from "./Anchor";

const Link = ({ href, name, newWindow }) => (
  <Anchor target={newWindow ? "_blank" : "_self"} href={href}>
    {name}
  </Anchor>
);

export default Link;
