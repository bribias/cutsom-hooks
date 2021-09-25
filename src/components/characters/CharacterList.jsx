import React from 'react';
import { useEvents } from '../../hooks/useEvents';
import Character from './Character';

const CharacterList = ({ characters, id }) => {

    <button onClick={() => {
        location.replace(`/${character.id}`);
    }}>
            {characters.map((character) => (
                <li key={character.id}>
                    <Character
                        name={character.name}
                        image={character.image}
                    />
            </li>
            ))}
        </button>
}

export default CharacterList;