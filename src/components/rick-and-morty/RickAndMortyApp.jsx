//              useEffect -> nuevo hook que aprendemos
//              useEffect: nos permite manejar lo que se llaman efectos secundarios y se ejecuta c/v que se renderiza mi aplic de nuevo
import React, { useEffect, useState } from "react";

import "./RickAndMortyApp.css";

export const RickAndMortyApp = () => {
  //éste useState lo hago para almacenar los datos que traje desde la API que tengo como results en el .then
  //                                           lo voy a inicializar como un array vacío por ahora
  const [resultados, setResultados] = useState([]);
  //             uso abajo en el onClick de los botones el setPagina p/pasarlas y volver de 1 en 1 dinámicam
  //                                   lo inicializo en 1 pq quiero ir a la pag 1
  const [pagina, setPagina] = useState(1); // ésto lo hago para poder cambiar las págs dinámicam abajo en la url de la api
  /*
  //useEffect -> función que consta de dos partes, 1. recibe una func (que a su vez adentro retorna una func(que se encarga de limpiar))
  //                                                  ésa func se va a ejecutar c/v que mi comp se renderice nuevam.
  //                                                  podría ser una func externa
  //                                               2. como 2do parám recibe un array de dependencias (con variables adentro(? )
  //                                                  cuando alguna de las var. que coloque adentro sea modificada, useEffect lo va a detectar, y cuando sean modificadas va a volver a ejecutar la func que tengo como 1er parám
  //                                                  si las depend se modifican, ejecutar nuevam la función
  //                                                  la depend sirve p/renderizar con nuevos datos
  useEffect(() => {
    return () => {};
  }, []);              // ---> (puedo no colocar ninguna dependecia, y quedaría así el array vacío [])
  */

  //cuando el useEf no tiene dependencias, siempre se ejecuta una sola vez cuando inicio el componente -> cuando el comp se construye, useEf siempre se va aejecutar una vez por lo menos -> y esa vez que se ejecuta solo una vez va a ser cuando no tenga dependencias en el array
  //                si le coloco dependencias, voy a hacer que se ejecute la func de nuevo

  //separar las responsabilidades del useEffect
  useEffect(() => {
    document.title = "Rick&Morty"; // -> document.title manipula el DOM (sirve p/cambiar el nombre de la "solapa" de mi pág)
  }); // -> éste useEf no necesita dependencias porque se ejecuta una sola vez y va a ser siempre igual, no necesito modificar nada

  useEffect(
    () => {
      //adentro del useEf, ejecutar la promesa fetch que va a llamar a la API de R&M (hacer la petición al servidor/la api)
      //                                              ésto le agregué (en la url de "next" puedo verlo), p/q que se cambie dinámicamente uso el useState de arriba y traigo la variable a page
      //                                                       template literals en lugar de "" para que me tome la ${}
      fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`) // como fetch es una promesa lo tengo que resolver con .then
        //    me devuelve un response que lo devuelvo en formate de json, que me devuelve otra promesa, por ende concatena un then
        .then((response) => response.json())
        //    me devuelve un resultado que va a ser(/hacer(?) lo que yo traje de la API, que va a ser justamente "result" -> (.then(result) , lo cambio por el obj que quiero ahí de la info. que me devolvió la api)
        //    éste result me devuelve dos resultados de la api en la consola, un info y un obj results que es un array (ese obj results es el que yo quiero)
        //      hago destructuración de results, que es el obj que yo quería tomar de la info. que me mandaba la api por la consola
        //                     voy a setear results
        .then(({ results }) => setResultados(results)) // -> voy a almacena esos resultados en un useState arriba
        //le agregamos un catch p/poder logear si hay algún error en la petición que estamos haciendo
        .catch((err) => console.log(err));
    },
    //pongo como dependencia pagina del useState pq c/v que ejecute setPagina voy a modificar el valor de pagina y eso va a producir que se ejecute todo el efecto (useEffect) de nuevo -> así se van cambiando las págs de los personajes y me vuelve a llamar a la api
    [pagina] // detecta que se modificó el valor que le pasamos como dependencia y el useEf vuelve a ejecutar toda la func pero ahora con le valor de pagina modificado (cuando hago click en los batones de pasar y volver)
    //necesito del valor de pagina para traer resultados distintos c/v que se ejecute la función
  );

  return (
    //operador ternario -> ? :
    //dibujar los hijos de R&M que muestre, pero vamos a ejecutar un renderizado condicional -> en base a una condición vamos a mostrar una cosa u otra
    //primero voy a preguntar si resultados.length es === a 0, y si es así vamos a devolver un h1
    // de lo contrario vamos a mapear los resultados y escribir su nombre con una imagen
    //(la lógica no necesita ni paréntesis ni llaves, como pasa dsp con html)
    //                        entre paréntesis indico qué es el html que se va a renderizar
    resultados.length === 0 ? (
      <h1>Cargando datos</h1>
    ) : (
      //                    pasamos una función de flecha que tiene que retornar un componente o un fragmento html
      //                            map siempre me va a pedir que c/elem tenga una llave única, mi llave va a ser el index
      //como acá agregué un div externo (p/agregar css), lo que reconoce es el div, entonces necesito sumarle internamente el map
      <div className="card-deck">
        {resultados.map((personaje, index) => {
          //                      c/hijo tiene que tener una prop que se llame "key" que sea única -> le paso index
          //               personaje. y las propiedades como están en la api para llamarlas(?
          return (
            <div className="card" key={index}>
              <img src={personaje.image} />
              <hr />
              <p>{personaje.name}</p>
            </div>
          );
        })}
        <button onClick={() => setPagina(pagina - 1)}>Anterior</button>
        <button onClick={() => setPagina(pagina + 1)}>Siguiente</button>
      </div>
      //           hago el onClick para ir sumando las págs de 1 en 1 en la func setPagina y hacer dinámico el pasado de las páginas en el sitio
    )
  );
};
