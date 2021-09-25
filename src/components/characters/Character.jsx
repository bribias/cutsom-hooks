import React from 'react';
import PropTypes from 'prop-types'

const Character = ({ name, image }) => (
    <>
        <img src={image} alt="character image" />
        <h2>{name}</h2>
    </>
);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Character