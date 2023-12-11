import React from "react";
import FooterComponent from "../components/fragments/FooterComponent";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../dist/css/booking.css";
import BookingFormSvg from "../assets/svg/bookingform.svg";
import BookingForm2Svg from "../assets/svg/bookingform2.svg";
import UnggahSvg from "../assets/svg/unggah.svg";
import { Link } from 'react-router-dom';
import NavbarstatisComponent from "../components/fragments/NavbarstatisComponent";

const BookingForm2Pages = () => {
  return (
    <div>
    <div style={{ backgroundColor: '#F3F3F3' }}>
        <NavbarstatisComponent/>

<div className=""
>
      <Container className="booking-svg-container"
      style={{
        marginTop: '90px',
        marginBottom: '40px',
        paddingTop:"30px",
        // backgroundColor:"black",
       
      }}>
        <div className="svg-wrapper pt-4" >
          <img src={BookingFormSvg} alt="Booking SVG" />
          <p>Ketua</p>
        </div>
        <div className="line-divider "></div>
        <div className="svg-wrapper pt-4">
          <img src={BookingFormSvg} alt="BookingForm SVG" />
          <p>Anggota</p>
        </div>
        <div className="line-divider "></div>
        <div className="svg-wrapper pt-4">
          <img src={BookingForm2Svg} alt="BookingForm2 SVG" />
          <p>Selesai</p>
        </div>
      </Container>

      <Container className="booking-container2 ">
        <div className="center-text">
          <p className="booking-header fs-4">Anggota</p>
        </div>
        <Form>
          <Form.Group as={Row} controlId="form">
            <Col>
              <Form.Label className="fs-6 ">Nama</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
            <Col>
            <Form.Label className="fs-6 ">No Hp</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form">
            <Col>
            <Form.Label className="fs-6 ">Alamat</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
            <Col>
            <Form.Label className="fs-6 ">No Hp Keluarga</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form">
          <Col style={{ marginLeft: '-8px' }}>
              <Form.Label className="fs-6 " style={{ marginLeft: '10px' }}>Jenis Identitas</Form.Label>
              <Form.Select
                className="booking-input custom-dropdown fs-6"
                aria-label="Pilih Jenis Identitas"
              >
                <option value="">Pilih Jenis Identitas</option>
                <option value="KTP">KTP</option>
                <option value="SIM">SIM</option>
                <option value="Kartu Pelajar">Kartu Pelajar</option>
              </Form.Select>
            </Col>
            <Col>
            <Form.Label className="fs-6 ">No Identitas</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
          </Form.Group>
          <Col>
          <Form.Label className="fs-6 ">Unggah Kartu Identitas</Form.Label>
          <Form.Group as={Row} controlId="formFileUpload2" className="custom-file-upload-input">
            <Col className="file-upload-col">
              <label htmlFor="fileInput">
                <input
                type="file"
                id="fileInput"
                className="booking-input custom-file-upload-input"
              />
              <div className="upload-svg-container">
              <img src={UnggahSvg} alt="Unggah SVG" width="41.625px" height="32.607px" />
                <p className="file-upload-text">klik untuk mengunggah file</p>
                <Button className="upload-button">unggah file</Button>
                </div>
                </label>
            </Col>
          </Form.Group>
          </Col>
        </Form>
      </Container>
    <Container className=""
     style={{
        marginBottom: '100px',
       
      }}
    >
      <div className="custom-button-container">
        <button className="custom-button">+</button>
      </div>
      <div className="notice-text">
        <p>* selesaikan dulu formulir keseluruhan anggota</p>
      </div>
      <div className="action-buttons">
        <Link to="/bookingform" className="custom-action-button">Kembali</Link>
        <Link to="/bookingform3" className="custom-action-button">Selanjutnya</Link>
      </div>
      </Container>

      <FooterComponent />
      </div>
    </div>
    </div>
  );
};

export default BookingForm2Pages;