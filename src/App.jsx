import { useState } from "react";

import "./App.css";

import NavbarBoots from "./components/NavbarBoots";
import CounterApp from "./pages/CounterApp";
import { Pokemons } from "./components/pokemons/Pokemons";

//Componente que exporto e importo en el archivo main
//acá dibujo toda mi aplicación, pero la puedo dividir y compartimentar en componentes
//             pokemons lo vamos a recibir desde acá
function App({ pokemons }) {
  //                                 valor en falso por defecto
  const [state, setState] = useState(false);
  return (
    //Higher Order Component -> un componente (hijo) dentro de otro componente, puedo pasarle varios hijos, y c/u de éstos hijos tiene su estado personal (CouterApp tiene su propio estado que es el del useState, y Pokemons tiene su propio estado que es el de los pokemons)
    //NavbarBoots está renderizando su children en NavbarBoots.jsx (-> lo que sea que le pase acá adentro va a renderizar)
    // pasar componentes por props (lo que está adentro de <NavbarBoots>..</>) (un componente es html, así que acá podría recibir cualq cosa (por ej un div, etc))
    //si state es true, vamos a pasar CounterApp
    //                        si state no es true, vamos a pasar Pokemons (que lo vamos a recibir arriba en App())
    //                                    en main.jsx lo agrego a <App /> -> la prop que me faltaba del main en App
    //envolvemos todo en un div, porque abajo a éste div vamos a ponerle un botón que diga "cambiar vista"
    //                      al botón vamos a pasarle que "state" (el est.) va a ser diferente (!) a "state"
    //                                si el state es false, al negarlo va a ser true y viceversa (siempre voy a estar invirtiendo el est. de ésta app. a través de ese botón)
    <NavbarBoots>
      <div>{state ? <CounterApp /> : <Pokemons pokemones={pokemons} />}
      <button onClick={() => setState(!state)}>Cambiar Vista</button></div>
    </NavbarBoots>
  );
  //          estamos renderizando condicionalmente (estamos dibujando dependiendo de una variable -> state) un componente u otro dentro de la barra de navegación
}

// function App() {
//   //le paso en el medio como si fuera un elem. html el hijito (CounterApp)
//   //ésto es pasar componente por props
//   //  (éste CounterApp es el que viene de NabbarBoots destructurado como children en el div abajo del navbar)
//   return (
//     <NavbarBoots>
//       <CounterApp />
//     </NavbarBoots>
//     // acá podría pasarle directam html si quisiera, xq un comp. es html (todo lo que tenga html es un comp tmb p/react):
//     /*
//     <NavbarBoots>
//       <div>
//         <h1>Hola Mundo ésta es la noticia</h1>
//         <p>Lorem ipsum</p>
//       </div>
//     </NavbarBoots>
//      */
//   );
// }

// function App() {
//   //                  podría pasarle el children de dos maneras: 1. <NavbarBoots children={<h1>Hola</h1>} />; / o:
//   return <NavbarBoots children={<CounterApp />} />;
// }

export default App;
