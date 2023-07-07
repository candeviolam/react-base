import React from "react";

//vamos a crear un array
const botones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const Calculadora = () => {
  //     reutilizando el class de CounterApp p/no hacer uno nuevo ahora -> no recomendable, lo ideal es que c/u tenga su css
  return (
    //                                             sin tag de cierre el input pq lo cerré en el primer tag
    //              acá no tomamos el index "(element, index)" pq no hace falta en éste caso
    //                     vamos a hacer una func en el onClick que va a recibir "e"
    //  va con return, pq es una func que retorna (?
    //                                                   ponemos el "name" p/q me devuelva el núm solo en consola, no con el <button>1</button>, etc
    <div className="counter">
      <input type="text" readOnly={true} value={0} />
      {botones.map((element) => {
        return (
          <button onClick={(e) => console.log(e.target.name)} name={element}>
            {element}
          </button>
        );
      })}
    </div>
  );
};
