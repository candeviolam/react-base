import { useState } from "react";

import "./App.css";
//truco de importación y exportación para hacerlo de una forma más sencilla
//                      la ruta va hasta las carpeta de CounterApp xq ahí automáticamente me va a detectar el index que me devuelve ésto
import CounterApp from "./pages/CounterApp"; // -> para reducir la cantidad de código en la pantalla y no tener que escribir " from "./pages/CounterApp/CounterApp.jsx"; "

const msj = (counter) => (counter % 2 === 0 ? "Par" : "Impar");

//Componente que exporto e importo en el archivo main
function App() {
  //importo CounterApp y arriba en el import...
  <CounterApp />;
}

export default App;
