import React from "react"
import PropTypes from "prop-types";

const SubmitButton = ({handleSubmit, text, id, disabled}) => (
    <div className="form-group">
        <button
          className="form-control btn btn-success"
          id = {id}
          onClick={handleSubmit}
          disabled={disabled}
          >{text}</button>
    </div>
);

SubmitButton.propTypes={
  text: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}

export default SubmitButton;
