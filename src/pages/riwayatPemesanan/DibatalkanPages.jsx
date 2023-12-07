
import { Button, Container } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import NavriwayatComponent from "../../components/fragments/NavriwayatComponent";
import NavakunComponent from "../../components/fragments/NavakunComponent";
import { Link } from "react-router-dom";


const products = [
  {
    id: 1,
    images:"/iconwarning.png",
    title:"Pendaftaran Dibatalkan!",
    desc: "Mohon Maaf, Pendaftaran Anda dibatalkan. Silahkan daftar kembali dan hubungi Admin Kami. Terima kasih atas partisipasi Anda.",
  },
  
];
const DibatalkanPages = () => {
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

        <NavakunComponent/>
        <Container className="content-riwayat mt-4">
        <br/>
        <br/>
          <NavriwayatComponent/>
          <div>
          {products.map((product) => (
        <div className="popup-batal position-absolute top-50 start-50 translate-middle">
          <div className="popup-batal-container" key={product.id}>
            <div className="text-center">
              <div className="popup-batal-body p-5 h-100 ">
              <img
                  src={product.images}
                  className="warning-img-fluid"
                  alt="icon warning"
                />
                <h2 className=" fs-4 fw-bold" style={{ color: "#C51616" }}>{product.title}</h2>
                <p className="text-black justify-content-center mt-2">{product.desc}</p>
                <Link to="/konfirm">
                <Button variant="Light" type="submit" className=" text-white border border-dark border-2 text-center" style={{borderRadius: '10px', width: '160px', height: '37px', backgroundColor: '#1D312C'}}>
                Hubungi Admin
              </Button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
          </div>
          </Container>
        </div>
        <div
            className=""
            style={{
            backgroundColor: "#D4DBD9",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "50vh",
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

export default DibatalkanPages;
