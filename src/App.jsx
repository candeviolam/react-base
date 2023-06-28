//primero importaciones de librerías o dependencias, dsp componentes arriba del css, y en orden alfabético
import NavbarBoots from "./components/NavbarBoots";
import Noticia from "./components/Noticia";

import "./App.css";
import { CONSTANTS } from "./constants/image.constants";

//Componente que exporto e importo en el archivo main
//          los parámetros que recibimos a través de los componentes -> PROPS (les podemos poner el nombre que queramos)
//           p/mantener la nomenclatura: le ponemos "props", PERO PODEMOS PONERLE EL NOMBRE QUE QUERAMOS
//           props -> las recibimos desde el lado que invoca el componente con la etiqueta html y podemos utilizarlas para enviarle información a cada uno de los componentes
function App(props) {
  return (
    //(props: me voy al componente Noticia (a su archivo))
    //         a Noticia, dsp de agregar props a la función en su archivo, como si fuera un atributo html le vamos a mandar la imagen a través de llaves (es decir, con js (entre llaves))
    <div>
      <NavbarBoots />
      <Noticia imagen={CONSTANTS.NOTICIA_PIKACHU}/>
    </div>
  );
}

export default App;
