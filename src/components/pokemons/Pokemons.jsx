import React from "react";
import { MappedNews } from "../mapped-news/MappedNews";

export const Pokemons = ({ pokemones }) => {
  return (
    <div>
      {pokemones.map((pokemon, index) => {
        return (
          <section key={index}>
            <MappedNews pokemon={pokemon} bg={pokemon.bg} />
            <hr />
          </section>
        );
      })}
    </div>
  );
};
