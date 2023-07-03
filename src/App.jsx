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
    //si state es true, vamos a pasar CounterApp
    //                        si state no es true, vamos a pasar Pokemons
    //                                    en main.jsx lo agrego a <App />
    <NavbarBoots>
      {state ? <CounterApp /> : <Pokemons pokemones={pokemons} />}
    </NavbarBoots>
  );
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
