import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Imgbrand from "/ndoroarum.png";



const NavLogin = () => {
  const [navBackground, setNavBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const activeStyle = {
    backgroundColor: "gray",
    color: "green",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <Navbar
      className={`Nav ${navBackground ? "bg-green" : ""}`}
      expand="lg"
      fixed="top"
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
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/home"
                style={{ color: "white", marginRight: "25px" }}
                activeStyle={activeStyle}
              >
                Beranda
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                style={{ color: "white", marginRight: "25px" }}
                activeStyle={activeStyle}
              >
              TentangKami
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              id="konten-dropdown"
              title="Konten"
              menuVariant="white"
              style={{ marginRight: "25px" }}
            >
              <NavDropdown.Item as={Link} to="/artikel">
                Artikel
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/galeri">
                Galeri
              </NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/info"
                style={{ color: "white", marginRight: "25px" }}
                activeStyle={activeStyle}
              >
                Info
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              id="Pesantiket-dropdown"
              title="Pesan Tiket"
              menuVariant="white"
              style={{ marginRight: "25px" }}
            >
              <NavDropdown.Item as={Link} to="/panduan">
                Syarat Pendakian
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/onlinebooking">
                Online Booking
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/ulasan"
                style={{ color: "white", marginRight: "25px" }}
                activeStyle={activeStyle}
              >
                Ulasan
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/login"
                style={{ color: "white", marginRight: "25px" }}
                activeStyle={activeStyle}
              >
            <button className=" btn-login  px-3 py-1 text-black border border-light" style={{ borderRadius:"30px" }}>
              Masuk
            </button>
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavLogin;