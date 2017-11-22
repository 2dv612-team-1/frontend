import React from "react";
import PropTypes from "prop-types";
import Select from "./Select";

const propTypes = {
	onChange: PropTypes.func.isRequired
};

const DropDown = ({ onChange }) => (
	<select onChange={onChange} name="role">
		<option value="admin">admin</option>
		<option value="representative">representative</option>
		<option value="company">company</option>
		<option value="customer">customer</option>
	</select>
);

DropDown.propTypes = propTypes;

export default DropDown;
