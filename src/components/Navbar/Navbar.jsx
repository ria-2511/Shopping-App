import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Icon from "../Icon/Icon";
import "./Navbar.scss";

const NavbarElement = () => {
  return (
    <div className="Navbar">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="./logo.png" alt="logo" width={100} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Men</Nav.Link>
              <Nav.Link href="#action2">Women</Nav.Link>
              <Nav.Link href="#action2">Home</Nav.Link>
              <Nav.Link href="#action2">Accessories</Nav.Link>
              <Nav.Link href="#action2">Groceries</Nav.Link>
            </Nav>
            <Form className="d-flex Searchbar">
              <Form.Control
                type="search"
                placeholder="     Search Items"
                className="SearchField"
                aria-label="Search"
              ></Form.Control>
              <div className="searchIcon">
                <Icon iconName="Search" showLabel={false} />
              </div>
            </Form>
            <Icon iconName="Profile" />
            <Icon iconName="Wishlist" />
            <Icon iconName="Bag" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarElement;
