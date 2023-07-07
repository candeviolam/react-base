//traigo todo el código de react Bootstrap -> modal

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//                  voy a hacer la destructuración del modal directam en el parám y no convirtiéndolo en una variable
//                    usar éste modal como si fuera un Higher Order Component
//                     le voy a pasar children y los voy a renderizar
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
