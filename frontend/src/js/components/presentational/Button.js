import React from 'react'
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'
import Button from '@material-ui/core/Button';

const MyButton = ({ text, className, id, href }) => (
    <Button
        variant='contained'
        color='primary'
        classes={{ root: className }}
        id={id}
        component={Link} to={href}
    >{text}</Button>
);

MyButton.propTypes = {
    text: Proptypes.string.isRequired,
    className: Proptypes.string.isRequired,
    id: Proptypes.string.isRequired,
    href: Proptypes.string.isRequired
}


export default MyButton;