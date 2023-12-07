import { Container } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import NavriwayatComponent from "../../components/fragments/NavriwayatComponent";
import NavakunComponent from "../../components/fragments/NavakunComponent";
import Bgakun from "../../assets/images/gambarriwayat/pesan.png";



const RiwayatPages = () => {
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


            <div className="bgakun text-center ">
            <img  className="align-self-end" src={Bgakun} alt="pesan" />
            <p className="fw-bold mt-lg-4 justify-content-center">Belum Ada Pesanan</p>
            </div>
          </Container>
        </div>
        <div
            className=""
            style={{
            backgroundColor: "#D4DBD9",
            //   backgroundSize: "cover",
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

export default RiwayatPages;
