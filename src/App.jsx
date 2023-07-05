import { useState } from "react";

import "./App.css";

import NavbarBoots from "./components/NavbarBoots";
import CounterApp from "./pages/CounterApp";
import { Pokemons } from "./components/pokemons/Pokemons";

//Componente que exporto e importo en el archivo main
//acá dibujo toda mi aplicación, pero la puedo dividir y compartimentar en componentes
//             pokemons lo vamos a recibir desde acá
function App({ pokemons }) {
  //     state es la variable que verifica cuál es que comp que se tiene que dibujar (!state abajo)
  //            ésta func se encarga de modificar la variable que verifica el renderizado de la vista
  const [state, setVista] = useState(true); // le pongo true para que me dibuje primero los pokemons (?
  const [counter, setCounter] = useState(0);
  return (
    //Higher Order Component -> un componente (hijo) dentro de otro componente, puedo pasarle varios hijos, y c/u de éstos hijos tiene su estado personal (CouterApp tiene su propio estado que es el del useState, y Pokemons tiene su propio estado que es el de los pokemons)
    //NavbarBoots está renderizando su children en NavbarBoots.jsx (-> lo que sea que le pase acá adentro va a renderizar)
    // pasar componentes por props (lo que está adentro de <NavbarBoots>..</>) (un componente es html, así que acá podría recibir cualq cosa (por ej un div, etc))
    //                le paso tanto con como setCon -> tengo que ponerlos en CounterApp.jsx como props --> ésto es para que cuando yo haga el "Cambio Vista" con el botón, el estado de mi contador debería permanecer donde lo haya dejado -> ahora al estado no estoy manejándolo desde CounterApp(.jsx) que se refresca, sino que lo estoy manejando desde App
    //                                     setCounter es la función como prop (?
    //           a NavbarB le vamos a pasar setVista (la entre {} puede tener otro nombre, pero tiene que ser el mismo que está en la constante de arriba)
    //                     es la función que nos va a permitir modificar el estado
    //  negando el state (!) porque tenía cruzados los botones en el navbar del navegador
    //le estoy pasando como parám al Navbar la función setVista -> que la recibe en NavbarBoots.jsx desestructurando desde props
    <NavbarBoots setVista={setVista}> 
      <div>
        {!state ? (
          <CounterApp con={counter} setCon={setCounter} />
        ) : (
          <Pokemons pokemones={pokemons} />
        )}
      </div>
    </NavbarBoots>
  );
}

export default App;
