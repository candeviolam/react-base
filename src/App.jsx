//primero importaciones de librerías o dependencias, dsp componentes arriba del css, y en orden alfabético
import NavbarBoots from "./components/NavbarBoots";
import Noticia from "./components/Noticia";

import "./App.css";
import { CONSTANTS } from "./constants/image.constants";
import Publicidadd from "./components/Publicidadd";

//Componente que exporto e importo en el archivo main
//          los parámetros que recibimos a través de los componentes -> PROPS (les podemos poner el nombre que queramos)
//            recibir en App un array , recibir {pokemones} y abajo un array de pokemon y utilizar ese array para recorrerlo con map noticia por ej (me voy a main.jsx y creo un objeto)
//            estoy haciendo el destructuring de "pokemones" -> (no hace falta que haga props.pokemones)
//              como sé que "pokemones" es un array... hago el if
function App({ pokemones }) {
  //esto se llama renderizado condicional
  if (!pokemones) {
    return <h1>Necesita proveer pokemones</h1>;
  }

  return (
    //    pasarle por props a mi componente lo que necesito para que trabaje
    //abro y cierro llaves {} para agregarle código de js, y vamos a usar el método map para recorrer el array (en lugar del forEach)
    //               map recibe una func por paráms que me va a devovler un pokemon y el index (que es el índice del pokemon)
    //  map utiliza el return (en éste caso vamos a retornar el componente Noticia)
    //    envuelvo Noticia y el hr en un fragment (podría ser un section por ej, pero para no utilizar nuevamente un div), porque el return no puede devolver dos elems padres separados, solo uno, entonces unifico
    <div>
      <NavbarBoots />
      {pokemones.map((pokemon, index) => {
        return (
          <>
            <Noticia
              imagen={pokemon.imagen}
              nombre={pokemon.nombre}
              texto={pokemon.texto}
            />
            <hr />
          </>
        );
      })}
      <Publicidadd />
    </div>
    //  duplicar el código de Noticia pero pasándole las props necesarias, de esta forma yo puedo reutilizar mi componente n veces
  );
}

export default App;
