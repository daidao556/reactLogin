import React from 'react'
import PropTypes from "prop-types";

const InvalidMessage = ({text, isDisplay=false, id}) => (
    <div>
        <p 
            className={isDisplay?"":"d-none"}
            id={id}> {text}</p>
    </div>
);

InvalidMessage.propTypes = {
    text: PropTypes.string.isRequired,
    isDisplay: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
};

export default InvalidMessage;