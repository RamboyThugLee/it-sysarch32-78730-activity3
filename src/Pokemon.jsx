import React from 'react';
import './Pokemon.css'; 

function Pokemon({ pokemon, language }) {
  const { id, name, type, base, image } = pokemon;
  const pokemonName = name[language];


  const getTypeClassName = (type) => {
    switch (type.toLowerCase()) {
      case 'grass':
        return 'grass-type';
      case 'poison':
        return 'poison-type';
      case 'fire':
        return 'fire-type';
  
      default:
        return 'default-type';
    }
  };

  return (
    <div className="pokemon-box">
      <div className="pokemon-container">
        <div className="pokemon-image">
          <img src={image} alt={`Pokemon ${pokemonName}`} />
        </div>
        <div className="pokemon-details">
          <div className="pokemon-header">
            <p className="pokemon-id">[{id}]</p>
            <p className="pokemon-name">{pokemonName}</p>
          </div>
          <div className="pokemon-types">
            {type.map((t, index) => (
              <div key={index} className={`pokemon-type ${getTypeClassName(t)}`}>
                {t}
              </div>
            ))}
          </div>
          <div className="pokemon-attributes">
            <div className="attribute-row">
              <p>HP: {base.HP}</p>
              <p>Speed: {base.Speed}</p>
            </div>
            <div className="attribute-row">
              <p>Attack: {base.Attack}</p>
              <p>Sp. Attack: {base['Sp. Attack']}</p>
            </div>
            <div className="attribute-row">
              <p>Defense: {base.Defense}</p>
              <p>Sp. Defense: {base['Sp. Defense']}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;