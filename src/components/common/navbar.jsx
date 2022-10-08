import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <div className="section-center">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/vacancy">
            Vacancy
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Navigation;
