import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Imgbrand from "/ndoroarum.png";



const NavPesan = () => {

  return (
    <Navbar
      className={`Nav "bg-green"`}
      expand="lg"
      fixed="top"
      style={{
        backgroundColor:"1D312C",
      }}
    >
      <Container>
        <div className="d-flex justify-content-start w-100">
        <img
              src={Imgbrand}
              alt="Ndoro Arum"
              className="mt-6"
              style={{ height: "48px", width: "46px", marginRight:"15px"}}
            />
          <Navbar.Brand  className="mt-6" style={{ color: "white" }}>
            NDORO ARUM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavPesan;