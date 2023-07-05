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
  //1ero desestructuro children de prop, y acto seguido lo renderizo abajo (en el div abajo de navbar)
  const { children } = prop;
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
