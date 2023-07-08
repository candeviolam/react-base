//traigo todo el código de react Bootstrap -> modal

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//                  voy a hacer la destructuración del modal directam en el parám y no convirtiéndolo en una variable
//                    usar éste modal como si fuera un Higher Order Component
//                     le voy a pasar children y los voy a renderizar
//                     p/hacer un HoC -> pedir los children a través de props -> en éste caso estoy haciendo el destructuring acá, pero podría sino hacer:
/*function CustomModal(props){
  const { children, show, setShow, handleSave } = props; ---> si quisiera hacer el destructuring en una const fuera de las props*/
function CustomModal({ children, show, setShow, handleSave }) {
  /* voy a extraer éste fragmento de código.. p/directam modificar el setShow(?

  //     show es la variable que muestra el modal
  //           setShow es la func que modifica el valor para mostrar el modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   */

  //                             como no tengo las constantes de arriba, donde decía handleClose pongo directm su func y etc, así en todos lados y todos los archivos(?
  return (

    //       show es una propiedad que tiene el modal, que se encarga de mostrar el modal si la propiedad es verdadera, y si la propiedad es falsa de cerrar el modal 
    //                   tenemos tmb un método que se llama onHide, que es un evento, que indica que cuando el modal se esconda tiene que poner setShow en false (es decir, le cambia el estado a show)
    //                                              cuando hago click en el botón "close" hace lo mismo que onHide, cambia show a false
    //                                     handleSave es la func que se va a encargar de guardar el formulario una vez que el usuario haya llenado los datos p/crear un pokemón
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//dsp de hacer ésto vamos a App.jsx

export default CustomModal;
