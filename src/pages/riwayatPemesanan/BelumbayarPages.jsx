// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import '../../dist/css/pages.css'
// import PopupPesanan from '../../components/fragments/PopupPesanan';
// import ButtonBayar from '../../components/elements/ButtonBayar';

// const BelumbayarPages = () => {
//   const [modalShow, setModalShow] = useState(false);
//   return (

//     <div className="Riwayat">
//       <div className=" h-vh-100">
//       <div
//             className="bg-image"
//             style={{
//             backgroundColor: "#D4DBD9",
//             //   backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "center center",
//               height: "100vh",
//             }}
//           >

//         <NavakunComponent/>
//         <Container className="content-riwayat mt-4">
//         <br/>
//         <br/>
//           <NavriwayatComponent/>
//     <div>
//       <Form.Group as={Row} style={{ justifyContent : "space-between", marginBottom: ".1px"}}>
//         <Form.Label column sm="2" style={{width: "40%"}}>Tanggal Pendakian</Form.Label>
//         <Col sm="6">
//         <Form.Control placeholder="20/11/2023 - 25/11/2023" disabled style={{background: "transparent", border: "none", outline: "none", textAlign: "end"}}/>
//         </Col>
//       </Form.Group>
//       <Form.Group as={Row} style={{ justifyContent : "space-between", marginBottom: ".1px"}}>
//         <Form.Label column sm="2" style={{width: "40%"}}>Jumlah Pendaki</Form.Label>
//         <Col sm="6">
//         <Form.Control placeholder="x5" disabled style={{background: "transparent", border: "none", outline: "none", textAlign: "end"}}/>
//         </Col>
//       </Form.Group>
//       <Form.Group as={Row} style={{ justifyContent : "space-between", marginBottom: ".1px"}}>
//         <Form.Label column sm="2" style={{width: "40%"}}>Harga Tiket </Form.Label>
//         <Col sm="6">
//         <Form.Control placeholder="Rp25000" disabled style={{background: "transparent", border: "none", outline: "none", textAlign: "end"}}/>
//         </Col>
//       </Form.Group>
//       <Form.Group as={Row} style={{ justifyContent : "space-between", marginBottom: ".1px"}}>
//         <Form.Label column sm="2" style={{width: "40%"}}>Parkir</Form.Label>
//         <Col sm="6">
//         <Form.Control placeholder="Rp20000" disabled style={{background: "transparent", border: "none", outline: "none", textAlign: "end"}}/>
//         </Col>
//       </Form.Group>
//       <hr/>
//       <Form.Group as={Row} className="mt-3" style={{ justifyContent : "space-between"}}>
//         <Form.Label column sm="2" style={{width: "40%"}}>Total Pembayaran</Form.Label>
//         <Col sm="6">
//         <Form.Control placeholder="Rp145000" disabled style={{background: "transparent", border: "none", outline: "none", textAlign: "end"}}/>
//         </Col>
//       </Form.Group>
//       <ButtonBayar onClick={() => setModalShow(true)}>
//         Bayar Sekarang
//       </ButtonBayar>

//       <PopupPesanan
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//       </div>
//       </Container>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default BelumbayarPages

import {Container } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import NavriwayatComponent from "../../components/fragments/NavriwayatComponent";
import NavakunComponent from "../../components/fragments/NavakunComponent";
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../dist/css/pages.css'
import PopupPesanan from '../../components/fragments/PopupPesanan';
import ButtonBayar from '../../components/elements/ButtonBayar';


const BelumbayarPages = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="Riwayat">
      <div className=" h-vh-100">
      <div
            className="bg-image"
            style={{
            backgroundColor: "#D4DBD9",
            //   backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "100vh",
            }}
          >
        {/* <NavbarComponent/> */}
        <NavakunComponent/>
        <Container className="content-riwayat mt-4">
        <br/>
        <br/>
          <NavriwayatComponent/>
          <div>
      <Form.Group as={Row} style={{ justifyContent : "space-between", marginBottom: ".1px"}}>
        <Form.Label column sm="2" style={{width: "40%"}}>Tanggal Pendakian</Form.Label>
        <Col sm="6">
        <Form.Control placeholder="20/11/2023 - 25/11/2023" disabled style={{background: "transparent", border: "none", outline: "none", textAlign: "end"}}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} style={{ justifyContent : "space-between", marginBottom: ".1px"}}>
        <Form.Label column sm="2" style={{width: "40%"}}>Jumlah Pendaki</Form.Label>
        <Col sm="6">
        <Form.Control placeholder="x5" disabled style={{background: "transparent", border: "none", outline: "none", textAlign: "end"}}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} style={{ justifyContent : "space-between", marginBottom: ".1px"}}>
        <Form.Label column sm="2" style={{width: "40%"}}>Harga Tiket </Form.Label>
        <Col sm="6">
        <Form.Control placeholder="Rp25000" disabled style={{background: "transparent", border: "none", outline: "none", textAlign: "end"}}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} style={{ justifyContent : "space-between", marginBottom: ".1px"}}>
        <Form.Label column sm="2" style={{width: "40%"}}>Parkir</Form.Label>
        <Col sm="6">
        <Form.Control placeholder="Rp20000" disabled style={{background: "transparent", border: "none", outline: "none", textAlign: "end"}}/>
        </Col>
      </Form.Group>
      <hr/>
      <Form.Group as={Row} className="mt-3" style={{ justifyContent : "space-between"}}>
        <Form.Label column sm="2" style={{width: "40%"}}>Total Pembayaran</Form.Label>
        <Col sm="6">
        <Form.Control placeholder="Rp145000" disabled style={{background: "transparent", border: "none", outline: "none", textAlign: "end"}}/>
        </Col>
      </Form.Group>
      <ButtonBayar onClick={() => setModalShow(true)}>
        Bayar Sekarang
      </ButtonBayar>

      <PopupPesanan
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
    </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
  
          </Container>
        </div>
        <div
            className=""
            style={{
            backgroundColor: "#D4DBD9",
            //   backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "100vh",
            }}
          ></div>
      </div>
      <br />
      <br />
      <br />


      <FooterComponent />
    </div>
  );
};

export default BelumbayarPages;
