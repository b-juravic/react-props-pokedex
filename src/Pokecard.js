import React from 'react';

/**
 * Shows a single Pokemon, with their name, image, and type
 */

function Pokecard({id, name, type}) {
  let pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard-container">
      <h3 className="Pokecard-heading">{name}</h3>
      <img src={pokeImage} className="Pokecard-image" alt="pokemon"/>
      <p>{type}</p>
    </div>
  );
}

export default Pokecard;
