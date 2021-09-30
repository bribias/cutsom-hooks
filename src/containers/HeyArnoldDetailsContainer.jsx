import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Character from '../components/characters/Character';
import { fetchOneCharacter } from '../services/heyArnoldAPI';

const HeyArnoldDetailsContainer = () => {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState({});
    const { id } = useParams();

    useEffect(() => (
        findOneCharacter(id)
            .then((character) => {
                setCharacter(character);
            })
            .finally(() => setLoading(false))
    ), []);
    if (loading) return (
        <img src="https://i.imgur.com/B8SSY5p.gif?noredirect" alt="loading spinner"
        />);
    
    return (
        <>
            <Character
                name={character.name}
                image={character.image}
            />
            <Link to="/">
                <button aria-label="home-button">Home</button>
            </Link>
        </>
    );
};

export default HeyArnoldDetailsContainer;