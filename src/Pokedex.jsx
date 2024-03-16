import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
      .then(response => response.json())
      .then(data => setPokemonList(data));
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      <div >
        <button className='language-button' onClick={() => changeLanguage('english')}>English</button>
        <button className='language-button' onClick={() => changeLanguage('japanese')}>Japanese</button>
        <button className='language-button' onClick={() => changeLanguage('chinese')}>Chinese</button>
        <button className='language-button' onClick={() => changeLanguage('french')}>French</button>
      </div>
      <div>
        {pokemonList.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;