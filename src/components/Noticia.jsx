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
function Noticia() {
  const estado = false;
  const estilos = { backgroundColor: "red", display: "flex" };

  if (estado) {
    estilos.backgroundColor = "blue";
  } else {
    estilos.backgroundColor = "green";
  }

//retornar html con componentes por dentro, anidar esos componentes (en App.jsx lo de Noticia Navbar Publicidad, etc)
  return (
    // estas etiquetas "<> </>" se llaman fragment
    //    el div recibe adentro style y style recibe adentro un objeto con backg... hecho ya variable, pero podría copiar todo el objeto adentro de style{} en lugar de hacer la variable
    // Parrafo fue previamente declarado afuera arriba
    <>
      <div style={estilos}>
        <figure>
          <img src={CONSTANTS.NOTICIA_PIKACHU} />
          <figcaption>Pikachu</figcaption>
        </figure>
        <Parrafo />
      </div>
    </>
  );
}

export default Noticia;
