//voy a usar el archivo index.jsx para hacer una exportación por defecto, p/que cuando quiera acceder al CounterApp, me apunte a la carpeta y el index.jsx solito me va a dirigir hasta el componente
//      importarla con destructuración
import { CounterApp } from "./CounterApp";

export default CounterApp;

//acá estoy importando CounterApp y exportándolo en el index.jsx por defecto
// (ir a App.jsx y ver cómo lo importo)