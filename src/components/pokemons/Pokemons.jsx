import React from "react";
import { MappedNews } from "../mapped-news/MappedNews";

//                                    voy a recibir setShow desde App.jsx(?, dsp voy a crear el botón abajo
export const Pokemons = ({ pokemones, setShow }) => {
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
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        Agregar Pokemón
      </button>
    </div>
    // abajo de los pokemones voy a crear un botón p/agregar pokemones
    //                                    onClick va a ejecutar una func que va a ejecutar setShow y lo va a poner en true
  );
};
