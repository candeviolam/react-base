import React, { useEffect, useState } from "react";

export const Reloj = () => {
  //                              lo voy a inicializar como una fecha
  const [time, setTime] = useState(new Date()); // -> Date() es un obj que me asigna la fecha que tiene la computadora en la que se está ejecutando el sist

  //cuando se ejecuta una primera vez el efecto, asignar el intervalo y crear la func
  useEffect(() => {
    //voy a usar una func de intervalo
    //(la func setInterval es una func que se ejecuta n veces)
    //la func setInterval hace que se ejecute la func que le estoy pasando por adentro (en este caso voy a pasarle el setTime(), que voy a pasarle el valor de una nueva fecha)
    //la func setInterval() es una func que recibe como 1er parám una func y coo segundo parám un intervalo
    //uso la variable intervalId p/poder dejar de ejecutarl el intervalo en el return
    const intervalId = setInteraval(() => {
      //pasarle el valor de la fecha actual pero c/v que pase 1seg (1000milisegs)
      setTime(new Date());
    }, 1000); // acá no necesito dependencia pq el cronómetro corre solo

    //el useEffect tiene un return que se denomina clean-up -> que es la que encarga de limpiar los recursos que hayamos usado en el useEf
    //así como inicio el setInterval, necesito apagarlo p/q no se siga ejecutando cuando cierre el comp
    //cuando el comp se destruya o se desmonte, necesito liberar el intervalo p/liberar el uso de la memoria ram
    return () => {
      // solo vamos a usar la func clean-up cuando estemos utilizando algún recurso que trabaje con memoria y que no se limpie cuando el comp se destruya
      clearInterval(intervalId);
    };
  }, []); // -> no necesita dependencias

  useEffect(
    () => {
      //               necesito que éste título se actualice c/v que el tiempo cambie, p/eso usamos las dependencias con la variable del useState
      document.title = `Hora actual: ${time.toLocaleTimeString()}`;

      //como ejemplo únicamente, si quisiéramos hacer un return acá, por ej:
      return () => {
        document.title = "Título limpio"; // o ""; -> string vacío
      };
    },
    //c/v que el valor del tiempo se modifique, se ejecute la func de nuevo
    [time]
  );

  //       usar time p/poder modificar el valor del reloj
  return (
    //          todo lo que sea fecha ((new) Date()) tiene esa func .toLocalTime/DateString()
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
};
