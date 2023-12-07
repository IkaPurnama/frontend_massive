import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FooterComponent from '../components/fragments/FooterComponent';
import "../dist/css/panduan.css"
import ImgKtp1 from "../assets/images/riwayat/ktp1.jpg";
import ImgKtp2 from "../assets/images/riwayat/ktp2.jpg";
import ImgKtp3 from "../assets/images/riwayat/ktp3.jpg";
import ImgKtp4 from "../assets/images/riwayat/ktp4.jpg";
import ImgKtp5 from "../assets/images/riwayat/ktp5.jpg";
import NavbarstatisComponent from '../components/fragments/NavbarstatisComponent';

const Riwayat5Pages = () => {
  return (
    <>
      <div
        className='d-flex flex-column min-vh-100'
        style={{
          backgroundColor: '#F3F3F3',
        }}
      >
        <NavbarstatisComponent />
        <Container
          className='riwayat-pesan p-4 gap-3 bg-white h-100'
          style={{
            marginTop: '100px',
            marginBottom: '100px',
          }}
        >
          <Row className='align-items-center'>
            <Link
              to="/riwayat4"
              className="text-decoration-none"
              style={{
                fontWeight: '500',
                fontSize: '25px',
                textAlign: 'left',
                color: 'black',
              }}
            >
              <BsArrowLeft size={24} style={{ marginRight: '10px' }} />
              Rincian Pesanan
            </Link>
          </Row>
          <div
            style={{
              borderBottom: '1px solid black',
              width: '100%',
              marginBottom: '20px',
            }}
          >
          </div>
          <div className='align-items-center'
          style={{
            fontWeight: '500',
            fontSize: '20px',
            textAlign: 'left',
            color: 'black',
            marginLeft: '34px'
          }}
          >Id Pesanan:  2011235
          </div>
          <Container className='p-4 gap-3 h-100' 
          style={{
            marginTop: '20px',
            marginBottom: '50px',
            backgroundColor: '#F7F7F7',
            border: '0.2px solid black',
            borderRadius: '20px',
            maxWidth: '1000px'
          }}>
            <div className='align-items-center'
            style={{
              fontWeight: 'bold',
              fontSize: '17px',
              textAlign: 'center',
              color: 'black',
              marginBottom: '20px'
            }}
            >
              Ketua Rombongan
            </div>
            <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPlaintextEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Dharma Nalendra"
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Control plaintext readOnly defaultValue="12 Agustus 2002" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Laki-laki" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp</Form.Label>
                <Form.Control plaintext readOnly defaultValue="081267546654" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tanggal Naik</Form.Label>
                <Form.Control plaintext readOnly defaultValue="1 Oktober 2023" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp Keluarga</Form.Label>
                <Form.Control plaintext readOnly defaultValue="081322121134" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tanggal Turun</Form.Label>
                <Form.Control plaintext readOnly defaultValue="7 Oktober 2023" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control plaintext readOnly defaultValue="akusianakgunung@gmail.com" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Jenis Identitas</Form.Label>
                <Form.Control plaintext readOnly defaultValue="KTP" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Nomor Identitas</Form.Label>
                <Form.Control plaintext readOnly defaultValue="1712678898760004" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Alamat</Form.Label>
              <Form.Control plaintext readOnly defaultValue="Jl. Penatapan No. 99,  Madiun Surabaya" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Foto KTP</Form.Label>
              <div style={{ display: 'flex', alignItems: 'center', border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '10px', padding: '5px', marginBottom: '10px' }}>
                <img
                  src={ImgKtp1}
                  alt="Foto KTP"
                  style={{
                    border: '0.2px solid black',
                    backgroundColor: '#DFDFDF',
                    borderRadius: '5px',
                    padding: '5px',
                    maxWidth: '60%',
                    height: 'auto',
                    marginRight: '10px', 
                  }}
                />
              </div>
            </Form.Group>
          </Form>
          </Container>
          <Container className='p-4 gap-3 h-100' 
          style={{
            marginTop: '20px',
            marginBottom: '50px',
            backgroundColor: '#F7F7F7',
            border: '0.2px solid black',
            borderRadius: '20px',
            maxWidth: '1000px'
          }}>
            <div className='align-items-center'
            style={{
              fontWeight: 'bold',
              fontSize: '17px',
              textAlign: 'center',
              color: 'black',
              marginBottom: '20px'
            }}
            >
              Anggota Rombongan
            </div>
            <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPlaintextEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Gusti Ageng"
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Control plaintext readOnly defaultValue="12 Agustus 2002" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Laki-laki" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp</Form.Label>
                <Form.Control plaintext readOnly defaultValue="081267546654" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tanggal Naik</Form.Label>
                <Form.Control plaintext readOnly defaultValue="1 Oktober 2023" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp Keluarga</Form.Label>
                <Form.Control plaintext readOnly defaultValue="081322121134" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tanggal Turun</Form.Label>
                <Form.Control plaintext readOnly defaultValue="7 Oktober 2023" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control plaintext readOnly defaultValue="akusianakgunung@gmail.com" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Jenis Identitas</Form.Label>
                <Form.Control plaintext readOnly defaultValue="KTP" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Nomor Identitas</Form.Label>
                <Form.Control plaintext readOnly defaultValue="1712678898760004" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Alamat</Form.Label>
              <Form.Control plaintext readOnly defaultValue="Jl. Penatapan No. 99,  Madiun Surabaya" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Foto KTP</Form.Label>
              <div style={{ display: 'flex', alignItems: 'center', border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '10px', padding: '5px', marginBottom: '10px'}}>
                <img
                  src={ImgKtp2}
                  alt="Foto KTP"
                  style={{
                    border: '0.2px solid black',
                    backgroundColor: '#DFDFDF',
                    borderRadius: '5px',
                    padding: '5px',
                    maxWidth: '60%',
                    height: 'auto',
                    marginRight: '10px', 
                  }}
                />
              </div>
            </Form.Group>
          </Form>
          </Container>
          <Container className='p-4 gap-3 h-100' 
          style={{
            marginTop: '20px',
            marginBottom: '50px',
            backgroundColor: '#F7F7F7',
            border: '0.2px solid black',
            borderRadius: '20px',
            maxWidth: '1000px'
          }}>
            <div className='align-items-center'
            style={{
              fontWeight: 'bold',
              fontSize: '17px',
              textAlign: 'center',
              color: 'black',
              marginBottom: '20px'
            }}
            >
              Anggota Rombongan
            </div>
            <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPlaintextEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Calvin Revianto"
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Control plaintext readOnly defaultValue="12 Agustus 2002" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Laki-laki" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp</Form.Label>
                <Form.Control plaintext readOnly defaultValue="081267546654" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tanggal Naik</Form.Label>
                <Form.Control plaintext readOnly defaultValue="1 Oktober 2023" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp Keluarga</Form.Label>
                <Form.Control plaintext readOnly defaultValue="081322121134" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tanggal Turun</Form.Label>
                <Form.Control plaintext readOnly defaultValue="7 Oktober 2023" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control plaintext readOnly defaultValue="akusianakgunung@gmail.com" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Jenis Identitas</Form.Label>
                <Form.Control plaintext readOnly defaultValue="KTP" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Nomor Identitas</Form.Label>
                <Form.Control plaintext readOnly defaultValue="1712678898760004" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Alamat</Form.Label>
              <Form.Control plaintext readOnly defaultValue="Jl. Penatapan No. 99,  Madiun Surabaya" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Foto KTP</Form.Label>
              <div style={{ display: 'flex', alignItems: 'center', border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '10px', padding: '5px', marginBottom: '10px' }}>
                <img
                  src={ImgKtp3}
                  alt="Foto KTP"
                  style={{
                    border: '0.2px solid black',
                    backgroundColor: '#DFDFDF',
                    borderRadius: '5px',
                    padding: '5px',
                    maxWidth: '60%',
                    height: 'auto',
                    marginRight: '10px', 
                  }}
                />
              </div>
            </Form.Group>
          </Form>
          </Container>
                    <Container className='p-4 gap-3 h-100' 
          style={{
            marginTop: '20px',
            marginBottom: '50px',
            backgroundColor: '#F7F7F7',
            border: '0.2px solid black',
            borderRadius: '20px',
            maxWidth: '1000px'
          }}>
            <div className='align-items-center'
            style={{
              fontWeight: 'bold',
              fontSize: '17px',
              textAlign: 'center',
              color: 'black',
              marginBottom: '20px'
            }}
            >
              Anggota Rombongan
            </div>
            <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPlaintextEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Lee Haechan"
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Control plaintext readOnly defaultValue="12 Agustus 2002" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Laki-laki" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp</Form.Label>
                <Form.Control plaintext readOnly defaultValue="081267546654" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tanggal Naik</Form.Label>
                <Form.Control plaintext readOnly defaultValue="1 Oktober 2023" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp Keluarga</Form.Label>
                <Form.Control plaintext readOnly defaultValue="081322121134" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tanggal Turun</Form.Label>
                <Form.Control plaintext readOnly defaultValue="7 Oktober 2023" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control plaintext readOnly defaultValue="akusianakgunung@gmail.com" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Jenis Identitas</Form.Label>
                <Form.Control plaintext readOnly defaultValue="KTP" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Nomor Identitas</Form.Label>
                <Form.Control plaintext readOnly defaultValue="1712678898760004" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Alamat</Form.Label>
              <Form.Control plaintext readOnly defaultValue="Jl. Penatapan No. 99,  Madiun Surabaya" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Foto KTP</Form.Label>
              <div style={{ display: 'flex', alignItems: 'center', border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '10px', padding: '5px', marginBottom: '10px'}}>
                <img
                  src={ImgKtp4}
                  alt="Foto KTP"
                  style={{
                    border: '0.2px solid black',
                    backgroundColor: '#DFDFDF',
                    borderRadius: '5px',
                    padding: '5px',
                    maxWidth: '60%',
                    height: 'auto',
                    marginRight: '10px', 
                  }}
                />
              </div>
            </Form.Group>
          </Form>
          </Container>
                    <Container className='p-4 gap-3 h-100' 
          style={{
            marginTop: '20px',
            marginBottom: '50px',
            backgroundColor: '#F7F7F7',
            border: '0.2px solid black',
            borderRadius: '20px',
            maxWidth: '1000px'
          }}>
            <div className='align-items-center'
            style={{
              fontWeight: 'bold',
              fontSize: '17px',
              textAlign: 'center',
              color: 'black',
              marginBottom: '20px'
            }}
            >
              Anggota Rombongan
            </div>
            <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPlaintextEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Kelvin Ardianto"
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Control plaintext readOnly defaultValue="12 Agustus 2002" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Laki-laki" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp</Form.Label>
                <Form.Control plaintext readOnly defaultValue="081267546654" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tanggal Naik</Form.Label>
                <Form.Control plaintext readOnly defaultValue="1 Oktober 2023" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp Keluarga</Form.Label>
                <Form.Control plaintext readOnly defaultValue="081322121134" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tanggal Turun</Form.Label>
                <Form.Control plaintext readOnly defaultValue="7 Oktober 2023" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control plaintext readOnly defaultValue="akusianakgunung@gmail.com" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Jenis Identitas</Form.Label>
                <Form.Control plaintext readOnly defaultValue="KTP" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Nomor Identitas</Form.Label>
                <Form.Control plaintext readOnly defaultValue="1712678898760004" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Alamat</Form.Label>
              <Form.Control plaintext readOnly defaultValue="Jl. Penatapan No. 99,  Madiun Surabaya" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Foto KTP</Form.Label>
              <div style={{ display: 'flex', alignItems: 'center', border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '10px', padding: '5px', marginBottom: '10px' }}>
                <img
                  src={ImgKtp5}
                  alt="Foto KTP"
                  style={{
                    maxWidth: '50%',
                    height: 'auto',
                    borderRadius: '5px',
                    marginRight: '10px',
                  }}
                />
              </div>
            </Form.Group>

          </Form>
          </Container>
        </Container>
        <FooterComponent />
      </div>
    </>
  );
};

export default Riwayat5Pages;
