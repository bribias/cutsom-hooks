import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacters, fetchOneCharacter } from '../services/heyArnoldAPI';

export const useEvents = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  useEffect(() => {
    fetchCharacters()
      .then((characters) => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);
  return { loading, characters };
};

export const useDetailEvents = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchOneCharacter(id)
      .then((character) => setCharacter(character))
      .finally(() => setLoading(false));
  }, []);
  return { loading, character };
};
