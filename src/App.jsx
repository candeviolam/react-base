import { useState } from "react";

import "./App.css";

import NavbarBoots from "./components/NavbarBoots";
import CounterApp from "./components/CounterApp";
import { Pokemons } from "./components/pokemons/Pokemons";
import Calculadora from "./components/calculadora";
import CustomModal from "./components/modal/CustomModal";
import Form from "react-bootstrap/Form";

//(con lo que estamos trabajando desde ésta aplicación)
//Higher Order Component
//pasar componente por props
//estamos enviando funciones por props tmb
//estamos asignando css a un comp hijo desde el padre (estoy agregando el css acá en el div con el className, pero desde App) -> no importa desde donde asigne el css, siempre va a estar con ese estilo (?
//estamos usando Rnederizado Condicional -> mi aplic se va a renderizar en base al estado que le estoy enviando y así nos aseguramos de manejar el flujo de nstra aplic a través de un est, usando un est

//Componente que exporto e importo en el archivo main

//       App es el componente que recibe los pokemons y los usa cuando va a renderizar Pokemons en el return
function App({ pokemons }) {
  const [state, setVista] = useState("contador");
  const [counter, setCounter] = useState(0);

  //vamos a crear una variable que se llame swow y setShow -> las que extrajimos de afuera (CustomModal.jsx) .. p/q cuando haga click muestre el modal(?
  const [show, setShow] = useState(false);
  //abajo a <CustomModal/> le pasamos ésto

  //       voy a llamar esta func dentro de <NavbarBoots></NavbarBoots>
  //ésta func me retorna un componente
  function ComponentRendered() {
    //      acá va a evaluar nstro state

    //(cuando ya está hecho lo de abajo,) para modificar el estado del modal vamos a crear dentro de lo que es Pokemons..
    //              a Pokemons tmb le vamos a pasar setShow (los tengo que recibir todavía del otro lado, en Pokemons.jsx(?)
    switch (state) {
      case "pokemon":
        return <Pokemons pokemones={pokemons} setShow={setShow} />;

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

  // dsp de crear el componente modal (CustomModal) vengo y lo llamo acá
  return (
    // voy a envolver la func del componente
    //                                     cuando llame ésta func acá adentro, se va a renderizar el comp indistíntamente del click que esté haciendo en mi aplic (Pokemon o Contador), se va a renderizar el comp que le estoy pasando
    //cambio en NavbarBoots.jsx los valores de setVista p/q aparezcan los pokemones y el contador
    //                                     por ésta func hemos dejado de depender unicamente de true o false (?, creamos una nueva func que me va a permitir renderizar un componente u otro dependiendo del valor que pasamos por el link (con el switch)

    // abajo de NavbarBoots vamos a poner CustomModal

    //             forma de pasar props que no sean tipo componente, ej: CustomModal " show={show} "
    <NavbarBoots setVista={setVista}>
      <div className="container-fluid box">{ComponentRendered()}</div>
      <CustomModal show={show} setShow={setShow}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre Pokemón" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="text" placeholder="Url" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder="Descripción" />
          </Form.Group>
        </Form>
      </CustomModal>
    </NavbarBoots>
  );
  //  a CustomModal le pasamos que show va a ser igual al show que acabamos de crear (en la variable de arriba(? ) , setShow .. etc

  //le tengo que pasar los children (los pokemons) al CustomModal -> p/eso abrimos y cerramos la etiqueta de CustomModal y los ponemos adentro
  //quiero crear un pokemón (para eso el modal) -> p/eso importamos un formularioo de react Bootstrap
  //                    le pongo nombre, imagen, etc -> los datos que están en el array de pokemones en main.jsx
}

export default App;

//agarrar el nombre, la imagen y la descrip del pokemon ingresado en el modal y guardarlos en el localStorage -> clase que viene
