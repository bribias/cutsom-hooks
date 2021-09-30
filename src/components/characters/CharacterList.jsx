import React from 'react';
import PropTypes from 'prop-types'
import Character from './Character';

const CharacterList = ({ name, image }) => {
 
   return (<button onClick={() => {
        location.replace(`/${character.id}`);
    }}>
        <img src={image} alt={name} height={'200px'} />
        <h2>{name}</h2>
    </button>)
};

Character.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default CharacterList;