import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//       JSX.Element = Componente => Objeto de Programación (es un clase (?)
//función + objeto
//                   puedo pasar como props, como paráms de una func, otro componente más pequeño
//                   vamos a recibir por prop el nuevo elemento (el div abajo del navbar) -> vamos a renderizar lo que me pase por prop
//"children" (comps. dentro de otro comp.) -> nomenclatura que se utiliza p/enviar un prop
function NavbarBoots(prop) {
  //                a la func setVista la recibo como prop y la estoy enviando desde App.jsx
  //1ero desestructuro children de prop, y acto seguido lo renderizo abajo (en el div abajo de navbar)
  //                además del children vamos a recibir el setVista que nos va a permitir cambiar la vista (tengo que pasar setVista por App.jsx tmb)
  //                NavbarB recibe la func setVista, que la estamos desestructurando desde props, y por dentro estamos yendo hasta un navlink (por ej el de home), y cuando le hacemos click primero estamos evitando que se comporte como un navlink(es decir, que intente navegar hacia otro sitio web) y tmb estamos cambiando el setVista a true
  //             el preventDelfault es porque como es un navlink, no queremos que se ejecute la navegación
  const { children, setVista } = prop;
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  setVista(true);
                }}
              >
                Pokemon
              </Nav.Link>
              <Nav.Link
                href="#link"
                onClick={(e) => {
                  e.preventDefault();
                  setVista(false);
                }}
              >
                Contador
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>{children}</div>
    </div>
    //     acá está renedirzando el children que se le pasó en App.jsx
    //     le paso children, a éste nuevo elem lo vamos a recibir por prop
  );
}

export default NavbarBoots;
