//escribir "rafc" para que me cree el componente solo
import React, { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <label>{counter}</label>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
};

/*
const msj = (counter) => (counter % 2 === 0 ? "Par" : "Impar");
//     me lo exporta como si fuera una variable/constante -> como tengo que importarla con destructuración cuando la importe -> voy a usar el archivo index.jsx dentro de ésta carpeta para hacer una exportación por defecto
export const CounterApp = () => {
  const [counter, setCounter] = useState(0); // -> HOOK que se encarga de manejar el estado
  const [mensaje, setMensaje] = useState(msj(counter));
  //ahora tengo una variable nombre que puedo usar p/mostrar en el html y modificarle el valor cuando suceda algún evento
  const [nombre, setNombre] = useState("");
  //                                   también puedo tener declarado un obj inicial
  const [objeto, setObjeto] = useState({
    ok: true,
    hola: "Cómo estás?",
  }); // -> voy a hacer que cuándo haga click en el botón +, se imprima en consola el obj ése (abajo)

  //   lo mismo sucedería si lo de arriba fuese un array (3 objs dentro del array)
  //   const [objeto, setObjeto] = useState([
  //     {
  //     ok: true,
  //     hola: "Cómo estás?",
  //     },
  //     {
  //     ok: true,
  //     hola: "Cómo estás?",
  //     },
  //     {
  //     ok: true,
  //     hola: "Cómo estás?",
  //     },
  //   ]);

  function handleAddClick() {
    console.log(objeto);
    setCounter(counter + 1);
    handleMessageChange();
  }

  function handleDeleteClick() {
    setCounter(counter - 1);
    handleMessageChange();
  }

  function handleMessageChange() {
    setMensaje(msj(counter));
  }

  //ésta func viene de abajo en el html en el input de nombre
  //                         ésta si recibe "e"
  function handleInputChange(e) {
    //modificar el valor de nombre -> cuando se ejecute esa func (cuando el usuario escriba ("change") en el input), va a asignarle el valor al nombre
    //ésta func se va a encargar de modificar el valor y (re)dibujar mi componente
    setNombre(e.target.value);
  }
  return (
    //puedo tomar un fragmento como el Navbar, y teniendo el componente puedo llamarlo como una etiqueta html y asignarlo en cualquier lado
    //    renderizado condicional
    //   className porque estoy usando clases en App.css (.red, .blue)
    //                 cuando abro y cierro llaves (className) me permite agregar código de js
    //                  agrego la functión para definir si mi app tiene que pintarse de rojo o de azul
    <div className="counter-app">
      <NavbarBoots />
      <span className={counter % 2 === 0 ? "blue" : "red"}>{mensaje}</span>
      <hr />
      <label>{counter}</label>
      <div>
        <button className="btn btn-primary" onClick={handleAddClick}>
          +
        </button>
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          -
        </button>
      </div>
      <hr />
      <div>
        <input type="text" name="nombre" onChange={handleInputChange} />
        <label>{nombre}</label>
      </div>
    </div>
    //          éste "nombre" entre {} es el valor de la variable del useState de arriba -> "nombre", 1er elem del array que me devuelve el useState
    //                                   equivalente al AddEventListener ("change", ) ... e.target.value ... de js
  );
};
 */
