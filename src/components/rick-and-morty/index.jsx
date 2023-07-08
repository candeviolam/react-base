//index.jsx nos acorta el recorrido hacia el componente
//index es el primer archivo que se reconoce en una carpeta. entonces llamo a la carpeta, la carpeta se encarga de importar el index y el index se va a encargar de importar el componente (RickAndMortyApp)

//escribir Rick... para que me lo cargue directam -> dsp le agrego el "export default" no más

import { RickAndMortyApp } from "./RickAndMortyApp";

export default RickAndMortyApp;


// si no usase index.jsx -> import RickAndMorty from "../../rick-and-morty/RickAndMortyApp.jsx"; para navegar hasta la carpeta/archivo