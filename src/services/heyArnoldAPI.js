export const fetchCharacters = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then((res) => res.json())
    .then((json) =>
      json.map((character) => ({
        id: character._id,
        name: character.name,
        image: character.image,
      }))
    );
};

export const fetchOneCharacter = (id) => {
    return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
        .then((res) => res.json())
        .then((character) => ({
            id: character._id,
            name: character.name,
            image: character.image,
        }));
};
