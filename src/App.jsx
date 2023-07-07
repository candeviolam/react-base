import { useState } from "react";

import "./App.css";

import NavbarBoots from "./components/NavbarBoots";
import CounterApp from "./components/CounterApp";
import { Pokemons } from "./components/pokemons/Pokemons";
import Calculadora from "./components/calculadora";

//(con lo que estamos trabajando desde ésta aplicación)
//Higher Order Component
//pasar componente por props
//estamos enviando funciones por props tmb
//estamos asignando css a un comp hijo desde el padre (estoy agregando el css acá en el div con el className, pero desde App) -> no importa desde donde asigne el css, siempre va a estar con ese estilo (?
//estamos usando Rnederizado Condicional -> mi aplic se va a renderizar en base al estado que le estoy enviando y así nos aseguramos de manejar el flujo de nstra aplic a través de un est, usando un est

//Componente que exporto e importo en el archivo main
function App({ pokemons }) {
  const [state, setVista] = useState("contador");
  const [counter, setCounter] = useState(0);

  //       voy a llamar esta func dentro de <NavbarBoots></NavbarBoots>
  //ésta func me retorna un componente
  function ComponentRendered() {
    //      acá va a evaluar nstro state
    switch (state) {
      case "pokemon":
        return <Pokemons pokemones={pokemons} />;

      case "contador":
        return <CounterApp con={counter} setCon={setCounter} />;

      //nuevo componente
      case "calculadora":
        return <Calculadora />;

      default:
        return <h1>Error en la ubicación</h1>;
        break;
    }
  }

  return (
    // voy a envolver la func del componente
    //                                     cuando llame ésta func acá adentro, se va a renderizar el comp indistíntamente del click que esté haciendo en mi aplic (Pokemon o Contador), se va a renderizar el comp que le estoy pasando
    //cambio en NavbarBoots.jsx los valores de setVista p/q aparezcan los pokemones y el contador
    //                                     por ésta func hemos dejado de depender unicamente de true o false (?, creamos una nueva func que me va a permitir renderizar un componente u otro dependiendo del valor que pasamos por el link (con el switch)
    <NavbarBoots setVista={setVista}>
      {" "}
      <div className="container-fluid box">{ComponentRendered()}</div>
    </NavbarBoots>
  );
}

export default App;
