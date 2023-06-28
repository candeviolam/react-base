// me prove del método para retornar el renderizado
import React from "react";
//       me importa las constantes automáticamente cuando la incrusté en la img del return
import { CONSTANTS } from "../constants/image.constants";

//como va a ser una función de flecha, se trata como variable, entonces para poder usarla la tengo que declarar antes afuera de Noticia
const Parrafo = () => {
  return <p>Noticia sobre el final de Pokemón</p>;
};

//Functional Component
//puede ser una func tradicional o una flecha
//       mi func se tiene que llamar igual que el nombre del componente
function Noticia(props) {

  // const {imagen} = props; -> destructuring si quisiera evitarme el props. de abajo en el return
  // forma más limpia todavía es hacer el destructuring dentro de la func Noticia -> ej hecho abajo

  //retornar html con componentes por dentro, anidar esos componentes (en App.jsx lo de Noticia Navbar Publicidad, etc)
  return (
    // estas etiquetas "<> </>" se llaman fragment
    //             recibo las constantes por props arriba como parametro de Noticia -> me voy al compon padre dsp (App) para enviarle a la función las propiedas que necesitamos (porque props es un objeto con una propiedad que se llama .imagen que va a recibir la url)
    //              paso por props desde el padre hacia el hijo la imagen de Pikachu (la llamamos desde el padre a través del mismo nombre, por ej "imagen")
    <>
      <div>
        <figure>
          <img src={props.imagen} />
          <figcaption>Pikachu</figcaption>
        </figure>
        <Parrafo />
      </div>
    </>
  );
}

export default Noticia;

// sin el const {imagen} ni el props. dentro del componente
//                   acá estoy destructurando la imagen del objeto props, ahí ya no necesito hacer ningun paso extra
// function Noticia({imagen})
