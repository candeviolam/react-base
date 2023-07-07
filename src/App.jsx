import { useState } from "react";

import "./App.css";

import NavbarBoots from "./components/NavbarBoots";
import CounterApp from "./components/CounterApp";
import { Pokemons } from "./components/pokemons/Pokemons";

//(con lo que estamos trabajando desde ésta aplicación)
//Higher Order Component
//pasar componente por props
//estamos enviando funciones por props tmb
//estamos asignando css a un comp hijo desde el padre (estoy agregando el css acá en el div con el className, pero desde App) -> no importa desde donde asigne el css, siempre va a estar con ese estilo (?
//estamos usando Rnederizado Condicional -> mi aplic se va a renderizar en base al estado que le estoy enviando y así nos aseguramos de manejar el flujo de nstra aplic a través de un est, usando un est

//Componente que exporto e importo en el archivo main
function App({ pokemons }) {
  const [state, setVista] = useState(true);
  const [counter, setCounter] = useState(0);

  return (
    //     al div donde estoy renderizando mis aplicaciones, le agrego un className (que lo traigo desde Bootstrap) y un class que se va a llamar "box"(lo traigo desde el App.css)
    //  componente condicional, en base a una condición, voy a mandar un componente u otro
    //el children que le estoy pasando (todo el div dentro de <NavbarBoots></Navb.>) como si fuera un hijito desde html, lo renderizo desde NavbarBoots.jsx -> <div>{children}</div>
    //    state es un booleano (true/false)
    //                el est con ya pertenece al App -> est de mi componente hijo (?

    <NavbarBoots setVista={setVista}>
      <div className="container-fluid box">
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
