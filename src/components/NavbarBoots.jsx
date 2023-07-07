import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
  //      para poder usar el componente SIEMPRE voy a recibir el componente hijo como "children" (el nombre que voy a recibir)
  const { children, setVista } = prop;
  return (
    //                   recibir "e" siempre en la función cuando hago un click
    //                     cambiamos los valores del setVista según el switch en la func en App.jsx (ComponentRendered())
    //        nuevo Nav.Link -> Calculadora
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
                  setVista("pokemon");
                }}
              >
                Pokemon
              </Nav.Link>
              <Nav.Link
                href="#link"
                onClick={(e) => {
                  e.preventDefault();
                  setVista("contador");
                }}
              >
                Contador
              </Nav.Link>
              <Nav.Link
                href="#link"
                onClick={(e) => {
                  e.preventDefault();
                  setVista("calculadora");
                }}
              >
                Calculadora
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>{children}</div>
    </div>
    //     acá está renedirzando el children que se le pasó en App.jsx (podría sacarle el div si quisiera, porque ya tengo un div del otro lado, en el App.jsx dónde lo estoy creando)
    //     le paso children, a éste nuevo elem lo vamos a recibir por prop
    //     los componentes hijos que pase como si fueran un componente interno se van a llamar siempre children
  );
}

export default NavbarBoots;
