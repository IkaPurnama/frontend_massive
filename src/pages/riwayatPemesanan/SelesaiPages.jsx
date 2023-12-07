import { Container } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import NavriwayatComponent from "../../components/fragments/NavriwayatComponent";
import NavakunComponent from "../../components/fragments/NavakunComponent";
import Bgakun2 from "../../assets/images/gambarriwayat/Selesai.png";
import { Link } from "react-router-dom";



const products = [
  {
    id: 1,
    title:"Pendaftaran Berhasil!",
    desc: "Pendaftaran pendakian Anda telah sukses! Bagikan pengalaman Anda dengan kami melalui testimoni. Kami senang mendengar tanggapan Anda dan berterima kasih atas partisipasi Anda.",
  },
  
];
const SelesaiPages = () => {
  return (
    <div className="Riwayat">
      <div className=" h-vh-100">
      <div
            className="bg-image"
            style={{
            backgroundColor: "#D4DBD9",
            
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
        <div className="popup-menunggu position-absolute top-50 start-50 translate-middle">
          <div className="popup-menunggu-container" key={product.id}>
            <div className="text-center">
              <div className="popup-menunggu-body p-5 h-100 ">
                <h2 className=" fs-4 fw-bold" style={{ color: "#FFA323" }}>{product.title}</h2>
                <p className="text-white justify-content-center mt-2">{product.desc}</p>
                <Link to="/ulasan"><button className="rounded">Ceritakan Pengalaman Anda</button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
          </Container>

        </div>
        <div className="bgakun text-center">
            <img  className="align-self-end position-absolute top-100 start-50 translate-middle" src={Bgakun2} alt="selesai"/>
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

export default SelesaiPages;
