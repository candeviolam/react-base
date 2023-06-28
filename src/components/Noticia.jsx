// me prove del método para retornar el renderizado
import React from "react";
//       me importa las constantes automáticamente cuando la incrusté en la img del return
import { CONSTANTS } from "../constants/image.constants";

//               el párrafo va a recibir por props el texto y se lo envío abajo al Parrafo para que lo pueda renderizar
const Parrafo = ({ texto }) => {
  return <p>{texto}</p>;
};

//Functional Component
//puede ser una func tradicional o una flecha
//       mi func se tiene que llamar igual que el nombre del componente
//                        me voy a App para mandarles las props (la info)
function Noticia({ imagen, nombre, texto }) {
  //retornar html con componentes por dentro, anidar esos componentes (en App.jsx lo de Noticia Navbar Publicidad, etc)
  return (
    // estas etiquetas "<> </>" se llaman fragment
    //             recibo las constantes por props arriba como parametro de Noticia -> me voy al compon padre dsp (App) para enviarle a la función las propiedas que necesitamos (porque props es un objeto con una propiedad que se llama .imagen que va a recibir la url)
    //              paso por props desde el padre hacia el hijo la imagen de Pikachu (la llamamos desde el padre a través del mismo nombre, por ej "imagen")
    <>
      <div>
        <figure>
          <img src={imagen} />
          <figcaption>{nombre}</figcaption>
        </figure>
        <Parrafo texto={texto} />
      </div>
    </>
    //           le envío a Parrafo el texto para que lo pueda renderizar
  );
}

export default Noticia;
