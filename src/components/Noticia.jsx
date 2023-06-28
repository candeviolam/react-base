// me prove del método para retornar el renderizado
//              llamamos useEffect
//                         elemento useState para procesar los arrays que me devuelve useEffect
//                         useState para procesar los resultados que traje con el useEffect
import React, { useEffect, useState } from "react";
//       me importa las constantes automáticamente cuando la incrusté en la img del return
import { CONSTANTS } from "../constants/image.constants";

//puede ser una func tradicional o una flecha
//       mi func se tiene que llamar igual que el nombre del componente
function Noticia() {
  //                                  useState para manejar el estado
  const [characters, setCharacters] = useState([]);

  //el useEffect para traer los resultados (los personajes de Rick y Morty de la api) y dps procesamos esos resultados con el useState
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      //           la primera respuesta se la tiene que pasar a json y esto me devuelve una promesa (ergo el segundo .then)
      .then((res) => res.json())
      //el segundo then me devuelve los resultados que tiene un objeto que se llama "results" adentro
      //    lo tengo que desestructurar al obj de results (los paréntesis violetas)
      .then(({ results }) => {
        setCharacters(results);
      })
      //hago un catch que me va a hacer un error
      .catch((err) => console.log(err));
  }, []);

  return (
    // estas etiquetas "<> </>" se llaman fragment
    <>
      {
        //results es un array []
        //        ? = operador de condición
        characters?.map((character, index) => {
          return (
            <div key={index}>
              <figure>
                <img src={character.image} />
                <figcaption>{character.name}</figcaption>
              </figure>
              <p>Noticia sobre el final de Pokemón</p>
            </div>
          );
        })
      }
    </>
  );
}

export default Noticia;
