import { useState } from "react";

import "./App.css";

import NavbarBoots from "./components/NavbarBoots";
import CounterApp from "./pages/CounterApp";
import { Pokemons } from "./components/pokemons/Pokemons";

//Componente que exporto e importo en el archivo main
//acá dibujo toda mi aplicación, pero la puedo dividir y compartimentar en componentes
//             pokemons lo vamos a recibir desde acá
function App({ pokemons }) {
  const [state, setState] = useState(false);
  const [counter, setCounter] = useState(0);
  return (
    //Higher Order Component -> un componente (hijo) dentro de otro componente, puedo pasarle varios hijos, y c/u de éstos hijos tiene su estado personal (CouterApp tiene su propio estado que es el del useState, y Pokemons tiene su propio estado que es el de los pokemons)
    //NavbarBoots está renderizando su children en NavbarBoots.jsx (-> lo que sea que le pase acá adentro va a renderizar)
    // pasar componentes por props (lo que está adentro de <NavbarBoots>..</>) (un componente es html, así que acá podría recibir cualq cosa (por ej un div, etc))
    //                le paso tanto con como setCon -> tengo que ponerlos en CounterApp.jsx como props --> ésto es para que cuando yo haga el "Cambio Vista" con el botón, el estado de mi contador debería permanecer donde lo haya dejado -> ahora al estado no estoy manejándolo desde CounterApp(.jsx) que se refresca, sino que lo estoy manejando desde App
    //                                     setCounter es la función como prop (?
    <NavbarBoots>
      <div>
        {state ? (
          <CounterApp con={counter} setCon={setCounter} />
        ) : (
          <Pokemons pokemones={pokemons} />
        )}
        <button onClick={() => setState(!state)}>Cambiar Vista</button>
      </div>
    </NavbarBoots>
  );
}

export default App;
