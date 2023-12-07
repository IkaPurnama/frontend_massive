import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FooterComponent from "../components/fragments/FooterComponent";
import EmailFormUlasan from "../components/fragments/EmailFormUlasanComponent";
import TestimoniImage from "../assets/images/gambarUlasan/testimoni.png";
// import Testi1 from "../assets/images/gambarUlasan/testi1.png";
// import Testi2 from "../assets/images/gambarUlasan/testi2.jpeg";
// import Testi3 from "../assets/images/gambarUlasan/testi3.png";
// import Testi4 from "../assets/images/gambarUlasan/testi4.jpg";
// import Testi5 from "../assets/images/gambarUlasan/testi5.jpg";
// import Testi6 from "../assets/images/gambarUlasan/testi6.jpg";
import "../dist/css/ulasan.css";
import "../dist/css/main.css"
import NavbarstatisComponent from "../components/fragments/NavbarstatisComponent";
import Cardtesti from "../components/fragments/Cardtesti";
import Cardtesti2 from "../components/fragments/Cardtesti2";

const UlasanPages = () => {
  return (
    <div>
      {/* <NavbarstatisComponent/>
        <img className="" fluid
          src={TestimoniImage}
          alt="Sindoro"/>
        <div className="text-overlay">KISAH SUKSES PENDAKI
        <div className="sub-text">MEREKA SEMUA ADA DISINI</div>
        </div>
        <div className="quote-text">
        “APA YANG PENDAKI KAMI KATAKAN”
      </div> */}

      <div className="h-vh-100" style={{ backgroundColor: "#D4DBD9" }}>
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${TestimoniImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "100vh",
          }}
        >
          <NavbarstatisComponent />
          <Container
            className="hero d-flex justify-content-start  h-100 "
            fluid
          >
            <Row className="my-auto gap-5  h-vh-100 p-5">
              <Col className="text-white ">
                <h4 className="fw-bold fs-1">
                  KISAH SUKSES{" "}
                  <span className="fw-bold fs-1" style={{ color: "#FFA323" }}>
                    PENDAKI
                  </span>
                </h4>
                <h1 className="fw-bold fs-4">MEREKA SEMUA ADA DI SINI</h1>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="text-white text-center">
        <h4 className="fw-bold fs-2 mt-5" style={{color:"#294E45"}}>
                  "APA YANG PENDAKI KAMI KATAKAN"
                </h4>
        <div className="mt-4">
            <Cardtesti/>
        </div>

        <div>
            <Cardtesti2/>
        </div>
        </div>

        {/* <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <Container className="d-flex flex-row"> */}
                {/* <div className="d-flex flex-column"> */}
                {/* <div class="wrapper bg-dark d-flex flex-wrap"> */}
                  {/* <div className="testi d-flex flex-column">
                    <div className="testi_member">
                      <div className="testi_img">
                        <img src={Testi4} alt="testi1" />
                      </div>
                      <h2>Mahasiswa</h2>
                      <h3>Dharma Nalendra</h3>
                      <p className="role">7 Oktober 2023</p>
                      <p className="role1">
                        “Saya baru saja kembali dari mendaki di Sindoro Via
                        Banaran. Basecamp ini benar-benar luar biasa dengan
                        penyediaan service yang unggul mulai dari perencanaan
                        hingga pelaksanaan pendakian. Saya pasti akan kembali
                        lagi suatuh hari.”
                      </p>
                    </div>
                    <div className="testi_member">
                      <div className="testi_img">
                        <img src={Testi5} alt="testi2" />
                      </div>
                      <h2>Pegawai Swasta</h2>
                      <h3>David</h3>
                      <p className="role">15 Oktober 2023</p>
                      <p className="role1">
                        "Saat baru turun dari pendakian Sindoro via Banaran,
                        rasanya gak bisa move on dari pengalaman seru tadi.
                        Basecamp-nya bener-bener oke, dari rencana sampe
                        pelaksanaan semuanya mantap. Pasti deh, suatu saat bakal
                        kembali buat nikmatin atmosfir yang keren ini lagi.
                      </p>
                    </div>
                    
                  </div> */}
                {/* </div> */}
                {/* </div> */}

                {/* <div class="wrapper2 d-flex flex-wrap">
                  <div className="testi">
                    <div className="testi_member">
                      <div className="testi_img">
                        <img src={Testi2} alt="testi2" />
                      </div>
                      <h2>Pegawai Swasta</h2>
                      <h3>Arum Gusti</h3>
                      <p className="role">7 September 2023</p>
                      <p className="role1">
                        “Saya baru saja kembali dari mendaki di Sindoro Via
                        Banaran. Basecamp ini benar-benar luar biasa dengan
                        penyediaan service yang unggul mulai dari perencanaan
                        hingga pelaksanaan pendakian. Saya pasti akan kembali
                        lagi suatu hari.”
                      </p>
                    </div>
                    <div className="testi_member">
                      <div className="testi_img">
                        <img src={Testi3} alt="testi3" />
                      </div>
                      <h2>Mahasiswa</h2>
                      <h3>Fika Ulin</h3>
                      <p className="role">21 Agustus 2023</p>
                      <p className="role1">
                        “Saya baru saja kembali dari mendaki di Sindoro Via
                        Banaran. Basecamp ini benar-benar luar biasa dengan
                        penyediaan service yang unggul mulai dari perencanaan
                        hingga pelaksanaan pendakian. Saya pasti akan kembali
                        lagi suatu hari.”
                      </p>
                    </div>
                  </div>
                </div>
                <div class="wrapper2 d-flex flex-wrap">
                    <div className="testi">
                <div className="testi_member">
                      <div className="testi_img">
                        <img src={Testi6} alt="testi3" />
                      </div>
                      <h2>Pegawai Negeri Sipil</h2>
                      <h3>Nurita Hilda</h3>
                      <p className="role"> 15 Juli 2023</p>
                      <p className="role1">
                        “Barusan aja selesai mendaki Sindoro lewat jalur
                        Banaran. Gak bisa nahan kagum sama basecamp-nya,
                        pelayanan dari awal sampe akhir bener-bener juara. Pasti
                        bakal ngebayangin lagi dan kembali suatu hari nanti.”
                      </p>
                    </div>
                    <div className="testi_member">
                      <div className="testi_img">
                        <img src={Testi1} alt="testi1" />
                      </div>
                      <h2>Mahasiswa</h2>
                      <h3>Sandrian Mahesa</h3>
                      <p className="role">10 September 2023</p>
                      <p className="role1">
                        “Saya baru saja kembali dari mendaki di Sindoro Via
                        Banaran. Basecamp ini benar-benar luar biasa dengan
                        penyediaan service yang unggul mulai dari perencanaan
                        hingga pelaksanaan pendakian. Saya pasti akan kembali
                        lagi suatuh hari.”
                      </p>
                    </div>
                    </div>
                    </div>
              </Container>
            </SwiperSlide>
          </Swiper>
        </div> */}
      </div>
       <Container className="w-100">
      <EmailFormUlasan />
      </Container>
      <FooterComponent />
    </div>
  );
};

export default UlasanPages;
