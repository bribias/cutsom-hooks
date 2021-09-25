import React from 'react';
import PropTypes from 'prop-types'

const Character = ({ name, image }) => {
    return (
        <div aria-label="single character" role="div">
        <img src={image} alt="character image" />
        <h2>{name}</h2>
    </div>)
};

Character.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Character;