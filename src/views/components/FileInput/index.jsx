import React from "react";

const FileInput = ({ onChange, value }) => (
  <div>
    <input type="file" onChange={onChange} value={value} />
  </div>
);

export default FileInput;
