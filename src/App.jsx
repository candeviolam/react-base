import { useState } from "react";

//primero importaciones de librerías o dependencias, dsp componentes arriba del css, y en orden alfabético
import NavbarBoots from "./components/NavbarBoots";
import Noticia from "./components/Noticia";

import "./App.css";
import { CONSTANTS } from "./constants/image.constants";
import Publicidadd from "./components/Publicidadd";

//#region map de Pokemones
//                                                        recibir además en el pokemon bg (se lo agrego tmb abajo en el map)
const MappedNews = ({ pokemon: { imagen, nombre, texto }, bg }) => (
  <Noticia imagen={imagen} nombre={nombre} texto={texto} bg={bg} />
);

//hago esto para sacar los pokemones y no mostrarlos dentro de mi componente abajo, p/que quede limpio el navegador pero no se muestre ahora en la web
const Pokemons = ({ pokemones }) => {
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
//#endregion

//Componente que exporto e importo en el archivo main
function App() {
  return (
    //          porque estoy usando el css de bootstrap
    <div className="counter-app">
      <label>0</label>
      <div>
        <button className="btn btn-primary">+</button>
        <button className="btn btn-danger">-</button>
      </div>
    </div>
  );
}

export default App;
