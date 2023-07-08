import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { CONSTANTS } from "./constants/image.constants.jsx";


//localSotrage que resuelve los pokemons

//hacer que los pokemones sean almacenados en el localstorage y leerlos desde el localstorage
//                              le vamos a poner pokemons y le vamos a pedir que nos traiga pokemons(?
const localS = localStorage.getItem("pokemons");
//let pokemonsArray = JSON.parse(localS); // -> lo convertimos en un obj de js --> preguntamos ahora en el if, así que edito ésta variable
let pokemonsArray = [];


// si localS existe.. seteamos el pokemonsArray
if (localS) {
  //si existe una lista de pokemons en el localStorage, se la asignamos a pokemonsArray
  pokemonsArray = JSON.parse(localS);
} else { // y sino lo que hacemos es crear el array en el inicio con los pokemones que elegimos y hacemos el setItem donde almacenamos los pokemons y el array
  pokemonsArray = [
    {
      nombre: "Pikachu",
      imagen: CONSTANTS.NOTICIA_PIKACHU,
      texto: "Pikachu es un pokemón de tipo eléctrico",
      bg: "yellow",
    },
    {
      nombre: "Squirtle",
      imagen: CONSTANTS.IMAGEN_SQUIRTLE,
      texto: "Squirtle es un pokemón de tipo agua",
      bg: "lightblue",
    },
    {
      nombre: "Charmander",
      imagen: CONSTANTS.IMAGEN_CHARMANDER,
      texto: "Charmander es un pokemón de tipo fuego",
      bg: "orange",
    },
  ];
  //si localS no existe.. estamos haciendo el setI
  //                    el setItem necesita la key (que es la misma del getI ("pokemons" en éste caso) y el valor (JSON.stringi...))
  localStorage.setItem("pokemons", JSON.stringify(pokemonsArray)); //-> localStorage no recibe JSON, por eso pasado a string
}



//       func createRoot() -> la que se encarga de renderizar nstra aplic, de ahi nstra aplic renderiza App.jsx, dsp dentro de App.jsx la func ComponentRendered() se encarga de renderizar el cuerpo, etc..
//       utiliza un método que se llama createRoot
//                                          obtiene un elem que se llama "root" que está en el index.html (todo mi proyecto se va a renderizar adentro de ese div de html)
//                                                   el método "render" que dibuja nstra aplicación
ReactDOM.createRoot(document.getElementById("root")).render(
  //dentro del elem root, todo el html que traiga el componente (que está en App.jsx)
  // éstas etiquetas (React.Strict..) ponen ciertas reglas p/q trabajemos con react y nos marque ciertos errores
  //   adentro llamamos al componente (App) como si fuera un etiqueta html con el tag de apertura y cierre combinado
  //       le paso esto al App para que me los renderice (?
  //       la prop que tengo que pasarle

  //               acá cambiamos el pokemons que estábamos pasándole por pokemonsArray
  //     (lo que agregamos en setItem) es lo que le pasamos como parám a App -> los pokemones y el array
  <React.StrictMode>
    <App pokemons={pokemonsArray} />
  </React.StrictMode>
);

//App.jsx App es el componente que recibe los pokemons y los usa cuando va a renderizar Pokemons
