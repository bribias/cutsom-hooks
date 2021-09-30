import React from 'react';
import { useDetailEvents } from '../../hooks/useEvents';

const Character = ({ name, image }) => {
    return (
        <div aria-label="single character" role="div">
        <img src={image} alt="character image" />
        <h2>{name}</h2>
    </div>)
};

export default Character;