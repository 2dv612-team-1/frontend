import React from "react";
import PropTypes from "prop-types";
import Select from "./Select";

const propTypes = {
	onChange: PropTypes.func.isRequired
};

const DropDown = ({ onChange }) => (
	<Select onChange={onChange} name="role">
		<option value="admin">admin</option>
		<option value="representative">representative</option>
		<option value="company">company</option>
		<option value="customer">customer</option>
	</Select>
);

DropDown.propTypes = propTypes;

export default DropDown;
