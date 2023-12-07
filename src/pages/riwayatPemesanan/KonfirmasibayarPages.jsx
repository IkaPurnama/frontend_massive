import { Container } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import NavriwayatComponent from "../../components/fragments/NavriwayatComponent";
import NavakunComponent from "../../components/fragments/NavakunComponent";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const KonfirmasibayarPages = () => {
  return (
    <div className="konfirm">
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

        <NavakunComponent/>
        <Container className="content-riwayat mt-4">
        <br/>
        <br/>
          <NavriwayatComponent/>
          </Container>

    <Container className=" bg-body-secondary form-konfirm border border-4  " style={{ backgroundColor: "" , width:"900px", marginBottom:"50px"}}>

    <div>
     <Form >
      <h1 className="text-center fs-4 fw-bold">Konfirmasi Pembayaran</h1>
      <Form.Group className="fs-7 mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label >Catatan</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="fs-7 mb-3" controlId="formBasictanggal">
        <Form.Label>Tanggal Pembayaran</Form.Label>
        <Form.Control type="date" placeholder=""/>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Unggah Bukti</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Link to="/selesai">
      <Button type="submit" className="text-white border border-dark border-2 text-center" style={{ borderRadius: '10px', width: 'auto', height: '37px', backgroundColor: '#1D312C'}}>
        Submit
      </Button></Link>
    </Form>
    <br/>
    <br/>
    <br/>
          </div>
          </Container>
        </div>
        <div
            className=""
            style={{
            backgroundColor: "#D4DBD9",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
             height:"50vh",
            }}
          ></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <FooterComponent />
    </div>
  );
};

export default KonfirmasibayarPages;



