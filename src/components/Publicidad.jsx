// import React from "react";
// import { CONSTANTS } from "../constants/image.constants";

// function Publicidad() {
//   const titulo = "Comprá en Vite Store"; // hago varibles para utilizar las llaves en las etiquetas en lugar de escribir ahí
//   return (
//     //           utilizo (en image.constants.jsx) un objeto que me devuelve un string y utilizo acá la variable para la url
//     //      en lugar de escribir sobre las etiquetas, utilizo varibles utilizando las llaves ({titulo})
//     <div>
//       <section>
//         <img src={CONSTANTS.PUBLICIDAD_POKEBOLA} />
//         <h3>{titulo}</h3>
//       </section>
//     </div>
//   );
// }

// export default Publicidad;

import React from "react";
import { CONSTANTS } from "../constants/image.constants";

function Publicidad() {
  const titulo = "Compra en Vite Store";
  return (
    <div>
      <section>
        <img src={CONSTANTS.PUBLICIDAD_POKEBOLA} />
        <h3>{titulo}</h3>
      </section>
    </div>
  );
}

export default Publicidad;
