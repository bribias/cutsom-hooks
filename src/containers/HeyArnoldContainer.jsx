import React from 'react';
import { useEvents } from '../hooks/useEvents';
import CharacterList from '../components/characters/CharacterList';
import Pagination from 'react-js-pagination';

const HeyArnoldContainer= () => {

    const { characters, loading, activePage, handleClick } = useEvents();

return loading ? (
        <img src="https://i.imgur.com/B8SSY5p.gif?noredirect" alt="loading spinner"
        />) : (
        <>
            <div>
                <Pagination
                activePage={activePage}
                onChange={handleClick}
                prevPageText="prev"
                nextPageText="next"
                />
            </div>
            <CharacterList characters={characters} />
            </>
    );
};

export default HeyArnoldContainer;