//primero importaciones de librerías o dependencias, dsp componentes arriba del css, y en orden alfabético
import NavbarBoots from "./components/NavbarBoots";
import Noticia from "./components/Noticia";

import "./App.css";
import { CONSTANTS } from "./constants/image.constants";
import Publicidadd from "./components/Publicidadd";

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
      <Noticia
        imagen={CONSTANTS.NOTICIA_PIKACHU}
        nombre={"Pikachu"}
        texto={"Texto enviado desde props"}
      />
      <hr />
      <Noticia
        imagen={
          "https://th.bing.com/th/id/OIP.st5Nf_sOuiQ9Gl6WuyOn_wHaJe?w=133&h=180&c=7&r=0&o=5&pid=1.7"
        }
        nombre={"Squirtle"}
        texto={"Texto enviado desde props (squirtle)"}
      />
      <hr />
      <Noticia
        imagen={
          "https://th.bing.com/th/id/OIP.ywoO7ULFwx4TdBaoZjBdaQHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7"
        }
        nombre={"Charmander"}
        texto={"Texto enviado desde props (charmander)"}
      />
      <Publicidadd />
    </div>
    //  duplicar el código de Noticia pero pasándole las props necesarias, de esta forma yo puedo reutilizar mi componente n veces
  );
}

export default App;
