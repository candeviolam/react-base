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

const msj = (counter) => (counter % 2 === 0 ? "Par" : "Impar");

//Componente que exporto e importo en el archivo main

//aplicar el renderizado condicional (.red y .blue en App.css), vamos al span abajo
function App() {
  const [counter, setCounter] = useState(0); // -> HOOK que se encarga de manejar el estado

  const [mensaje, setMensaje] = useState(msj(counter));

  function handleAddClick() {
    setCounter(counter + 1);
    handleMessageChange();
  }

  function handleDeleteClick() {
    setCounter(counter - 1);
    handleMessageChange();
  }

  function handleMessageChange() {
    setMensaje(msj(counter));
  }

  return (
    //    renderizado condicional
    //   className porque estoy usando clases en App.css (.red, .blue)
    //                 cuando abro y cierro llaves (className) me permite agregar código de js
    //                  agrego la functión para definir si mi app tiene que pintarse de rojo o de azul
    <div className="counter-app">
      <span className={counter % 2 === 0 ? "blue" : "red"}>{mensaje}</span>
      <hr />
      <label>{counter}</label>
      <div>
        <button className="btn btn-primary" onClick={handleAddClick}>
          +
        </button>
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          -
        </button>
      </div>
    </div>
  );
}

//cuando se usa el useState, tiene un pequeño delay de una acción

export default App;
