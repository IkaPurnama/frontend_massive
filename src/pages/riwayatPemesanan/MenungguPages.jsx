import { Container } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import NavriwayatComponent from "../../components/fragments/NavriwayatComponent";
import NavakunComponent from "../../components/fragments/NavakunComponent";
import Bgakun1 from "../../assets/images/gambarriwayat/konfirmasi.png";


const products = [
  {
    id: 1,
    title:"Terimakasih!",
    desc: "Pendaftaran Anda sedang kami proses. Menunggu admin untuk menyetujui pendaftaran.",
  },
  
];
const MenungguPages = () => {
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
        <div className="popup-menunggu position-absolute top-50 start-50 translate-middle">
          <div className="popup-menunggu-container" key={product.id}>
            <div className="text-center">
              <div className="popup-menunggu-body p-5 h-100 ">
                <h2 className=" fs-4 fw-bold" style={{ color: "#FFA323" }}>{product.title}</h2>
                <p className="text-white justify-content-center mt-2">{product.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
          </div>
       
            <div className="bgakun text-center">
            <img  className="align-self-end position-absolute top-100 start-50 translate-middle" src={Bgakun1} alt="pesan"/>
            </div>
          </Container>
        </div>
        <div
            className=""
            style={{
            backgroundColor: "#D4DBD9",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "30vh",
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

export default MenungguPages;
