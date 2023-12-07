import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FooterComponent from '../components/fragments/FooterComponent';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "../dist/css/panduan.css"
import NavbarstatisComponent from '../components/fragments/NavbarstatisComponent';

const Riwayat4Pages = () => {
  return (
    <>
      <div className='justify-content-center align-items-center'
        style={{
          backgroundColor: '#F3F3F3',
          paddingTop: '100px',
          paddingBottom: '200px',
        }}
      >
        <NavbarstatisComponent />
        <Container>
          <Row className="justify-content-center">
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ 
                fontWeight: '600', 
                fontSize: '24px', 
                marginBottom: '0px' 
              }}
              >Riwayat Pemesanan</h2>
              <div style={{ 
                borderBottom: '2px solid black', 
                width: '100%', 
                marginBottom: '30px' 
              }}
              >
              </div>
            </div>
          </Row>
          <Row>
            <Table
              style={{
                textAlign: 'center',
                fontSize: '16px',
                width: '50%',
                margin: '0 auto',
                marginBottom: '50px'
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      fontSize: '16px',
                      textAlign: 'center',
                      backgroundColor: '#1D312C',
                      color: '#FFFFFF',
                      fontWeight: 'normal',
                      border: 'none',
                    }}
                  >
                    <NavLink
                    // MASUKKAN LINK PAGE MENUNGGU KONFIRMASI //
                      to="/"
                      className="nav-link"
                    >
                      Menunggu Konfirmasi
                    </NavLink>
                  </th>
                  <th
                    style={{
                      fontSize: '16px',
                      textAlign: 'center',
                      paddingLeft: '100px',
                      backgroundColor: '#1D312C',
                      color: '#FFFFFF',
                      fontWeight: 'normal',
                      border: 'none',
                    }}
                  >
                    <NavLink
                    // MASUKKAN LINK PAGE INI //
                      to="/"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Selesai
                    </NavLink>
                  </th>
                </tr>
              </thead>
            </Table>
          </Row>
          <Row className="justify-content-center">
            <Table 
            style={{
              textAlign: 'center',
              fontSize: '16px'
            }}
            >
              <thead>
                <tr>
                  <th style={{ 
                    fontSize: '18px', 
                    fontWeight: 'bold', 
                    textAlign: 'center', 
                    backgroundColor: '#1D312C', 
                    color: '#fff' 
                    }}
                  >
                    Tanggal
                  </th>
                  <th style={{ 
                    fontSize: '18px', 
                    fontWeight: 'bold', 
                    textAlign: 'center', 
                    backgroundColor: '#1D312C', 
                    color: '#fff' 
                    }}
                  >
                    Id Pesanan
                  </th>
                  <th style={{ 
                    fontSize: '18px', 
                    fontWeight: 'bold', 
                    textAlign: 'center', 
                    backgroundColor: '#1D312C', 
                    color: '#fff' 
                    }}
                  >
                    Nama Ketua
                  </th>
                  <th style={{
                    backgroundColor: '#1D312C'
                    }}
                  >
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20/11/2023</td>
                  <td>2011235</td>
                  <td>Dharma Nalendra</td>
                  <td>
                    <Link to="/riwayat5">    
                    <Button variant="success"
                    style={{
                      backgroundColor: '#1D312C',
                      fontSize: '13px',
                      width: '201px',
                      height: '36px',
                      borderRadius: '30px',
                      boxShadow: '0px 5px 10px rgba(20, 30, 25, 0.5)',
                    }}
                    >Cek Selengkapnya</Button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
};

export default Riwayat4Pages;