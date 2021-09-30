import React from 'react';
import { useDetailEvents } from '../../hooks/useEvents';

const Character = () => {
    const { character, loading } = useDetailEvents();

    if (loading)
        return (
            <img src="https://i.imgur.com/B8SSY5p.gif" alt="loading spinner" />
        );
    
    return (
        <div aria-label="single character" role="div">
            <img src={character.image} alt="character image" />
            <h2>{character.name}</h2>
        </div>
    );
};

export default Character;