import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

//       utiliza un método que se llama createRoot
//                                          obtiene un elem que se llama "root" que está en el index.html (todo mi proyecto se va a renderizar adentro de ese div de html)
//                                                   el método "render" que dibuja nstra aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
//dentro del elem root, todo el html que traiga el componente (que está en App.jsx) 
// éstas etiquetas (React.Strict..) ponen ciertas reglas p/q trabajemos con react y nos marque ciertos errores
//   adentro llamamos al componente (App) como si fuera un etiqueta html con el tag de apertura y cierre combinado
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
