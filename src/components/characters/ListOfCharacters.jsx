import React from 'react';
import CharacterList from './CharacterList';
import { Link } from 'react-router-dom';
import { useEvents } from '../../hooks/useEvents';

const ListOfCharacters = () => {
    const { characters, loading } = useEvents();

    if (loading)
        return (
            <img src="https://i.imgur.com/B8SSY5p.gif" alt="loading spinner" />
        );
    
    return (
        <ul aria-label="character-list">
            {characters.map((character) => (
                <Link key={character.id} to={`${character.id}`}>
                    <li key={character.id}>
                        <CharacterList image={character.image} name={character.name} />
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default ListOfCharacters;