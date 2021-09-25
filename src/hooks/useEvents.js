import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacters } from '../services/heyArnoldAPI';

export const useEvents = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchCharacters()
            .then((characters) => setCharacters(characters))
            .finally(() => setLoading(false));
    }, []);
    return { loading, characters };
};