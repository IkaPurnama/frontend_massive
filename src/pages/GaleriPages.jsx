import React from 'react'
import "bootstrap/js/src/modal";
import { Container, Row, Col } from "react-bootstrap";
import FooterComponent from "../components/fragments/FooterComponent";
import BgGaleri from "../assets/images/gambarGaleri/bg_galeri.png";
import Galeri1 from "../assets/images/gambarGaleri/galeri1.png";
import Galeri2 from "../assets/images/gambarGaleri/galeri2.png";
import Galeri3 from "../assets/images/gambarGaleri/galeri3.png";
import Galeri4 from "../assets/images/gambarGaleri/galeri4.png";
import Galeri5 from "../assets/images/gambarGaleri/galeri5.png";
import Galeri6 from "../assets/images/gambarGaleri/galeri6.png";
import Galeri7 from "../assets/images/gambarGaleri/galeri7.png";
import Galeri8 from "../assets/images/gambarGaleri/galeri8.png";
import Galeri9 from "../assets/images/gambarGaleri/galeri9.png";
import Galeri10 from "../assets/images/gambarGaleri/galeri10.png";
import Galeri11 from "../assets/images/gambarGaleri/galeri11.png";
import Galeri12 from "../assets/images/gambarGaleri/galeri12.png";
import NavbarGaleri from '../components/fragments/NavbarGaleri';
import NavbarstatisComponent from '../components/fragments/NavbarstatisComponent';

export default function GaleriPages() {
  return (
    <>
    <div className="galeri">
      <div>
        <div className="hero-galeri min-vh-100 w-100"
        style={{
          backgroundImage: `url(${BgGaleri})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
          paddingTop: "230px",
        }}
        >
          <div className='carousel-overlay'>
          <NavbarstatisComponent/>
              <div className='text-center'>
                <h1 className='tagline text-white fs-1 fw-bold'>GALERI GUNUNG SINDORO</h1>
                <p className='text-white text-white mb-0'
                style={{
                  fontSize: "20px",
                }}
                >Berbagai keindahan Gunung Sindoro ada disini</p>
                <p className='text-white text-white'
                style={{
                  fontSize: "17px",
                }}
                >
                <b>Puncak Sindoro</b>. 3153 MDPL</p>
              </div>
          </div>
        </div>
      </div>
       <div className="text-center justify-content-center"
        style={{
          paddingBottom: "50px"
        }}
        >
          <h2 className="text-center fs-2 fw-bold"
          style={{
              marginTop: "30px",
              color: "#1D312C",
              fontSize: "30px",
          }}>
            Keindahan Ndoro Arum
          </h2>
          {/* <div className="d-flex align-items-center justify-content-center mt-3">
          <NavbarGaleri/>
          </div> */}
        </div>

        <div className='min-vh-100 d-flex align-items-center'
        style={{
          paddingBottom: "80px"
        }}
        >
          <Container>
            <Row className='row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-1 g-3'>
              <Col>
                <img src={Galeri1} alt='Gambar1' data-bs-toggle='modal' 
                className='w-100 cursor-pointer' data-bs-target='#imageExample1'
                style={{
                  height: "362px",
                }}
                />
                <div className='modal fade' id='imageExample1' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri1} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={Galeri2} alt='Gambar2' data-bs-toggle='modal' 
                className='w-100 cursor-pointer' data-bs-target='#imageExample2'
                style={{
                  height: "447px",
                }}
                />
                <div className='modal fade' id='imageExample2' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri2} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={Galeri7} alt='Gambar7' data-bs-toggle='modal' 
                className='w-100 cursor-pointer' data-bs-target='#imageExample7'
                style={{
                  height: "364px",
                }}
                />
                <div className='modal fade' id='imageExample7' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri7} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={Galeri8} alt='Gambar8' data-bs-toggle='modal' 
                className='w-100 cursor-pointer' data-bs-target='#imageExample8'
                style={{
                  height: "436px",
                }}
                />
                <div className='modal fade' id='imageExample8' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri8} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={Galeri3} alt='Gambar3' data-bs-toggle='modal' 
                className='w-100 cursor-pointer' data-bs-target='#imageExample3'
                style={{
                  height: "439px",
                  marginTop: "-85px"
                }}
                />
                <div className='modal fade' id='imageExample3' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri3} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={Galeri4} alt='Gambar4' data-bs-toggle='modal' 
                className='w-100 cursor-pointer' data-bs-target='#imageExample4'
                style={{
                  height: "272px",
                }}
                />
                <div className='modal fade' id='imageExample4' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri4} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={Galeri9} alt='Gambar9' data-bs-toggle='modal' 
                className='w-100 cursor-pointer' data-bs-target='#imageExample9'
                style={{
                  height: "439px",
                  marginTop: "-83px"
                }}
                />
                <div className='modal fade' id='imageExample9' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri9} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={Galeri10} alt='Gambar10' data-bs-toggle='modal' 
                className='w-100 cursor-pointer' data-bs-target='#imageExample10'
                style={{
                  height: "294px",
                  marginTop: "-10px"
                }}
                />
                <div className='modal fade' id='imageExample10' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri10} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={Galeri5} alt='Gambar5' data-bs-toggle='modal' 
                className='w-100 cursor-pointer' data-bs-target='#imageExample5'
                style={{
                  height: "358px"
                }}
                />
                <div className='modal fade' id='imageExample5' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri5} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={Galeri6} alt='Gambar6' data-bs-toggle='modal' 
                className='w-100 cursor-pointer' data-bs-target='#imageExample6'
                style={{
                  height: "444px",
                  marginTop: "-83px"
                }}
                />
                <div className='modal fade' id='imageExample6' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri6} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={Galeri11} alt='Gambar11' data-bs-toggle='modal' 
                className='w-100 cursor-pointer' data-bs-target='#imageExample11'
                style={{
                  height: "358px"
                }}
                />
                <div className='modal fade' id='imageExample11' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri11} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <img src={Galeri12} alt='Gambar12' data-bs-toggle='modal' 
                className='w-100 cursor-pointer' data-bs-target='#imageExample12'
                style={{
                  height: "429px",
                  marginTop: "-71px"
                }}
                />
                <div className='modal fade' id='imageExample12' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri12} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      <FooterComponent />
    </div>
    </>
  )
}