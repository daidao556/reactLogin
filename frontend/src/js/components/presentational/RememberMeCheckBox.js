import React from "react"
import PropTypes from "prop-types";

const rememberMeCheckBox = ({type="checkbox", checked=false, handleChange, id, text='Remember me'}) => (
    <div className="checkbox">
    <label> <input
          type={type}
          id = {id}
          checked={checked}
          onChange={handleChange}
        /> Remember me</label>
       
    </div>
);

rememberMeCheckBox.propTypes={
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  text: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}

export default rememberMeCheckBox;
