//            vamos a hacer un useState
import React, { useState } from "react";

import "./Calculadora.css";

//vamos a crear un array
const botones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const Calculadora = () => {
  //acá vamos a crear un estado
  const [value, setValue] = useState("");
  //     reutilizando el class de CounterApp p/no hacer uno nuevo ahora -> no recomendable, lo ideal es que c/u tenga su css
  return (
    //                                                sin tag de cierre el input pq lo cerré en el primer tag
    //              acá no tomamos el index "(element, index)" pq no hace falta en éste caso
    //               vamos a hacer una func en el onClick que va a recibir "e"
    //  va con return, pq es una func que retorna (?
    //      c/elemento (en éste caso los buttons) tiene que tener algo que se llame "key" propio en un map, al cual le vamos a pasar un index, que en éste caso va a ser directam "element" -> pq element va del 0 al 9, entonces no se va a repetir nunca
    <div className="counter calc">
      <input type="text" readOnly={true} value={value} />
      {botones.map((element) => {
        return (
          <button
            key={element}
            name={element}
            onClick={(e) => setValue(value + e.target.name)}
          >
            {element}
          </button>
        );
      })}
      <button name="+" onClick={(e) => setValue(value + e.target.name)}>
        +
      </button>
      <button name="-" onClick={(e) => setValue(value + e.target.name)}>
        -
      </button> 
      <button name="*" onClick={(e) => setValue(value + e.target.name)}>
        *
      </button> 
      <button name="/" onClick={(e) => setValue(value + e.target.name)}>
        /
      </button> 
      <button name="=" onClick={() => setValue(eval(value))}>
        =
      </button>
    </div>
    //  cuándo haga click en el "=" -> lo que voy a hacer en la func "=" va a ser usar una func de js que se llama "eval"
  );
};
