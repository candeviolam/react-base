//primero importaciones de librerías o dependencias, dsp componentes arriba del css, y en orden alfabético
import NavbarBoots from "./components/NavbarBoots";
import Noticia from "./components/Noticia";

import "./App.css";

//Componente que exporto e importo en el archivo main
function App() {
  //retornamos Noticia en el app que ya está exportado en el main
  return (
    //    debería importarme los componentes automáticamente arriba
    <div>
      <NavbarBoots />
      <Noticia />
    </div>                                                                                              
  );
}

export default App;
