//primero importaciones de librerías o dependencias, dsp componentes arriba del css, y en orden alfabético
import NavbarBoots from "./components/NavbarBoots";
import Noticia from "./components/Noticia";

import "./App.css";
import { CONSTANTS } from "./constants/image.constants";
import Publicidadd from "./components/Publicidadd";

//                                                        recibir además en el pokemon bg (se lo agrego tmb abajo en el map)
const MappedNews = ({ pokemon: { imagen, nombre, texto }, bg }) => (
  <Noticia imagen={imagen} nombre={nombre} texto={texto} bg={bg}/>
);

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
    //          .map para recorrer el array, que nos devuelva los elems y los dibuje. en react usar el .map casi siempre (en casos puntuales el for o forEach)
    //              el map recibe una func, y esa func recibe como paráms 1ero el elem que se encuentra en el array (pokemon) y 2do el índice
    //                la func map me devuelve un pokemón y un índice
    //                pokemon e index (segundo elem que recibo como parámetro) dentro de la func que voy a realizar dentro del map
    //    como los fragment no reciben llaves (key={}), lo envuelvo/convierto en un section o un div y le agrego las llaves
    <div>
      <NavbarBoots />
      {pokemones.map((pokemon, index) => {
        return (
          //       c/u de los hijos de una lista tiene que tener una unique "key" de tipo prop -> crear a c/u de los elems un key (abajo en el "section")
          //       como todos los elems son hnos (los distintos componentes Noticia p/c pokemón, que recibe props) nos los puedo distinguir, por eso les agrego una key única
          //       cualq nombre en la key(?
          //                                  bg va a ser algo, vamos hasta el main.jsx y le agregamos una propiedad que se llame bg al obj del array de pokemons
          //                                    dsp se lo paso a la const de MappedNews tmb (bg={bg}), y tmb eN Noticia.jsx agregárselo a Noticia
          <section key={index}>
            <MappedNews pokemon={pokemon} bg={pokemon.bg} />
            <hr />
          </section>
        );
      })}
      <Publicidadd />
    </div>
    //  duplicar el código de Noticia pero pasándole las props necesarias, de esta forma yo puedo reutilizar mi componente n veces
  );
}

/* 

<Noticia
  imagen={pokemon.imagen}
  nombre={pokemon.nombre}
  texto={pokemon.texto}
/>

para hacerlo más limpio todavía (const arriba del map (por fuera) abajo de los import para el código )

un componente que se va a encargar de devolverme la Noticia que a su vez sólo recibe el pokemon

.                   va a recibir pokemon por destructuring
1_ const MappedNews = ({pokemon}) => {
.        hacemos destructuring acá (imagen, nombre y texto de pokemon) y sacamos el pokemon. abajo 
    const { imagen, nombre, texto } = pokemon;
    return (
      <Noticia
        imagen={imagen}
        nombre={nombre}
        texto={texto}
      />
    )
}

.                           una función de flecha para más limpio todavía (? (ya sin return tmp)
.                         destructuring del objeto pokemon -> recibiendo imagen, nomb y texto del obj pokemon, y a su vez le estoy pasando esos valores a la Noticia
2_ const MappedNews = ({pokemon: { imagen, nombre, texto } }) => (
      <Noticia imagen={imagen} nombre={nombre} texto={texto} />
);

en lugar de Noticia en el map de arriba, le pasaría antes del <hr />:
.           le pasamos el pokemon que recibimos en la constante por destructuring
.                    y el pokemon que le vamos a pasar es el que estamos recibiendo arriba (en el map)
<MappedNews pokemon={pokemon} />

*/

export default App;
