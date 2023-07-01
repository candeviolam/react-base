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

//             creamos una func que se encarga de recibir counter (porque no existe fuera de App) y me va a devolver el mensaje
// const msj = (counter) => counter % 2 === 0 ? "Par" : "Impar";

//Componente que exporto e importo en el archivo main
function App() {
  //vamos a declarar con la sintaxis de useState el valor inicial que queremos incrustar en nstra aplicación
  //    abrimos y cerramos corchetes porque en la posición 0 del array, el useState me va a devolver la variable que quiero usar (que en éste caso va a ser "counter") -> puedo llamarla como quiera
  //              en el 2do elem, que es el índice 1, me va a devolver una función (que puedo llamarle como quiera)
  //               normalmente la nomenclatura para las funcs del useState se llaman "set" + el nombre de la variable que vamos a modificar (camelCase)
  //                          igualar eso a useState, pq ésto es como hacer destructuring, estar haciendo destructuración de un array
  //                                     el useS recibe como parám el estado inicial, el 1er estado que va a tener mi elem -> el est inicial puede ser "undefined" "null", es decir que puedo no pasarle nada al useS como estado inicial (pero tengo que ver qué repercusiones va a tener en mi aplicación)
  //                                     normalmente siempre vamos a iniciar nstras variables, en este caso la iniciamos en 0, que es el valor que teníamos en el label antes de poner la variable (cuando era texto plano) -> si yo acá pusiera "1" o "9", ese es el valor con el que iniciaría mi counter en la aplcación cuando entre a la url
  //si bien ésto es una constante, vamos a "modificar" el valor de la const con la función -> useS no modifica el valor de la constante, sino que internamente elimina la variable que existía y crea una nueva con el valor que le pase, pero asignándole el mismo nombre (elimina el valor y vuelve a crearlo) -> con useS no voy a estar modificando una constante, sino que voy a estar creando constantemente esas variables
  //              vamos a utilizar el setCounter para asignarle el valor al useState que nos queremos que tenga, p/eso vamos a hacer uso de la función onClick del botón (abajo)
  const [counter, setCounter] = useState(0); // -> HOOK que se encarga de manejar el estado

  //                                     ejecutar acá como est inic la func " msj(counter) " adentro de los paréntesis (de la constante de arriba )
  const [mensaje, setMensaje] = useState("Par"); // -> adentro del div de counter-app ...

  //ésta func va a manejar cuando mi usuario haga click en "+" (botón abajo) -> nombre que quiera a la func
  //                      podría recibir "e" pero no la voy a poner porque no la necesito (porque no estamos en un formulario (?)
  function handleAddClick() {
    //en setCounter, le paso el valor que quiero que tenga la variable (cuando hago el click) -> el dato/est inicial es modificado y se renderiza el num del click, pero si actualizo la pág vuelve al valor inicial
    //         no podemos hacer "counter++" porque counter es una constante y no está permitido, ahí estaría acumulando sobre la misma variable y modificándole el valor, sino que:
    //         acá no estaría sumándole uno a counter (como en el ej de arriba), sino que le sumaría 1 a "0", y en la 2da vuelta 1 + 1, dsp 2 +1 , etc
    //         acá no estoy usando counter para acumular valor, sino que lo estoy usando para tomar su valor y sumarle ese valor 1
    //setCounter termina moficiando el valor inicial a "counter + 1"
    setCounter(counter + 1);
    handleMessageChange();
  }

  function handleDeleteClick() {
    setCounter(counter - 1);
    handleMessageChange();
  }
   
  function handleMessageChange(){
    //setMensaje y utilizar un operador ternario y preguntar:
    //                                   de lo contrario
    setMensaje(counter % 2 === 0 ? "Par" : "Impar");
  }
  /*
    //afuera arriba tengo la constante para ésta lógica
    //extrayendo la lógica para que la podamos hacer en un mismo lugar
    setMensaje(msj(counter)); -> poner ésto en lugar del setMensaje(counter % 2 ===...) de arriba
  */

  return (
    //          porque estoy usando el css de bootstrap
    //       abro y cierro llaves p/ poner mi variable dentro del label (remplacé el texto plano del 0 por una variable)
    //                                      onClick de react (como el "click" de addEv.Lis. de js) p/asignarle el valor al useS que queremos que tenga (?
    //                                               onClick recibe la función que voy a utilizar (en éste caso la voy a crear en la "handleAddClick" arriba )
    //                                               cuando tengo una func que recibe el mismo parám que la func interna que se está ejecutando, no hace falta que cree una nueva, sólo le paso la referencia hacia dónde está mi func y react la ejecuta automáticamente (no hace falta hacer el (e), (e).. de abajo en la opción)
    <div className="counter-app">
      <span>{mensaje}</span>
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

//    una opcioón p/llamar esta función en el onClick={} es crear otra funcion que se llame handleAddClick y llamar a handleAddClick: (explicación de porqué no arriba)
//    onClick={(e) => handleAddClick(e)}


//cuando se usa el useState, tiene un pequeño delay de una acción

export default App;
