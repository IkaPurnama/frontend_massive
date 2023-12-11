import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import FooterComponent from "../components/fragments/FooterComponent";
import CarouselPanduan from "../components/fragments/CarouselPanduan";
import "../dist/css/panduan.css";
import NavbarstatisComponent from "../components/fragments/NavbarstatisComponent";
import { Container } from "react-bootstrap";

const PanduanpesanPages = () => {
  return (
    <>
      <div className="Panduanpesan" >
        <CarouselPanduan />
        <NavbarstatisComponent/>
        
        <div
          className="content-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            marginTop: "0px",
            padding: "20px",
            boxSizing: "border-box",
            backgroundColor: "#1D312C",
          }}
        >
          <Container className="w-80">
          <h1 className="text-center"
            style={{
              color: "#FFA323",
              fontSize: "32px",
              marginBottom: "30px",
              marginTop: "30px",
              // paddingLeft: "500px",
              fontWeight: "Bold",
              alignItems:"center"
            }}
          >
            PANDUAN BOOKING ONLINE
          </h1>
          <ul
            style={{
              color: "#FFFFFF",
              fontFamily: "Poppins",
              fontSize: "15px",
              paddingLeft: "40px",
              marginBottom: "20px",
            }}
          >
            <li>
              Buka halaman resmi Booking Pendakian Gunung Sindoro Via Ndoro Arum
              melalui link berikut
            </li>
            <li>
              Klik “Booking Sekarang”, Anda akan masuk ke halaman Booking Online
            </li>
            <li>
              Pastikan jadwal pendakian hari tersebut tidak libur atau sedang
              tutup.
            </li>
            <li>Login menggunakan akun pendaki Anda.</li>
            <li>
              Pastikan jumlah anggota rombongan yang akan ikut dalam pendakian.
              jumlah anggota yang hadir tidak boleh lebih dari yang telah
              didaftarkan.
            </li>
            <li>
              Isikan data diri seluruh anggota beserta ketua. Tekan tombol
              tambah untuk menambahkan jumlah anggota yang ikut dalam pendakian.
            </li>
            <li>Masukkan scan KTP seluruh anggota pendakian beserta ketua.</li>
            <li>
              Isi centang pada bagian{" "}
              <b>file yang diunggah asli dan bisa dipertanggung jawabkan</b>{" "}
              sebagai tanda keaslian file scan KTP yang diunggah .
            </li>
            <li>Pastikan kembali data booking Anda!</li>
            <li>
              Setelah data sudah sesuai, klik tombol “Daftar” untuk mengajukan
              pendaftaran pendakian anda. admin akan memeriksa data anda dan
              akan memberikan konfirmasi dengan menyetujui atau menolak
              pengajuan anda.
            </li>
            <li>
              Jika sudah selesai mendaftar, silahkan cek di riwayat pemesanan
              anda untuk melihat status pemesanan anda.
            </li>
            <li>
              Apabila diterima dan belum membayar, anda bisa membayar melalui
              transfer ke nomor rekening yang tertera pada invoice anda.
            </li>
            <li>Pada halaman ini Anda juga bisa membatalkan pemesanan.</li>
            <li>
              Setelah mengirimkan uang pembayaran sesuai dengan nominal yang
              tertera, unggah bukti pembayaran anda dengan menekan tombol{" "}
              <b>konfirmasi pembayaran</b>.
            </li>
            <li>
              Unggah bukti scan pembayaran dan isi tanggal serta berikan catatan
              apabila ada. Tekan tombol kirim apabila data sudah sesuai.{" "}
            </li>
          </ul>
          </Container>
        </div>
        
        {/* <div
          className="d-flex justify-content-center align-items-center"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginTop: "0px",
            padding: "20px",
            boxSizing: "border-box",
            backgroundColor: "#D4DBD9",
            textAlign: "center",
          }}
        >
          <div className="justify-content-center">
          <h1
            style={{
              color: "#FFA323",
              fontSize: "32px",
              marginBottom: "30px",
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            PERSYARATAN PENDAKIAN
          </h1>
          <p
            style={{
              color: "#000",
              fontFamily: "Poppins",
              fontSize: "15px",
              marginBottom: "0px",
              maxWidth: "600px",
            }}
          >
            Kepada semua pendaki diwajibkan mengikuti peraturan yang telah{" "}
            <br /> disediakan Basecamp.
          </p>
          <div className="justify-content-center"
            style={{
              backgroundColor: "#30433E",
              borderRadius: "17px",
              width: "fit-content",
              padding: "15px",
              position: "relative",
              marginBottom: "8px",
              marginTop: "20px",
              // marginLeft: "-70px",
            }}
          >
            <svg
              height="26"
              width="30"
              style={{
                position: "absolute",
                left: "13",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke="#D4DBD9"
                strokeWidth="2"
                fill="#30433E"
              />
            </svg>
            <span
              style={{
                color: "white",
                marginLeft: "35px",
                lineHeight: "25px",
                fontSize: "15px",
              }}
            >
              Wajib Membawa Surat Keterangan Sehat
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
              marginTop: "0px",
              padding: "20px",
              boxSizing: "border-box",
              backgroundColor: "#D4DBD9",
              textAlign: "left",
            }}
          >
            <ul
              style={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "15px",
                paddingLeft: "425px",
                marginBottom: "5px",
              }}
            >
              <li>Dipastikan tidak ada gejala Covid – 19</li>
              <li>Masa berlaku surat keterangan sehat 3 hari</li>
              <li>
                Surat keterangan sehat bisa dari daerah asal atau puskesmas
                daerah Wonosobo
              </li>
            </ul>
          </div>
          <div
            style={{
              backgroundColor: "#30433E",
              borderRadius: "17px",
              width: "fit-content",
              padding: "15px",
              position: "relative",
              marginBottom: "8px",
              marginTop: "20px",
              marginLeft: "-70px",
            }}
          >
            <svg
              height="26"
              width="30"
              style={{
                position: "absolute",
                left: "13",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke="#D4DBD9"
                strokeWidth="2"
                fill="#30433E"
              />
            </svg>
            <span
              style={{ color: "white", marginLeft: "35px", lineHeight: "25px" }}
            >
              Wajib Membawa Kartu Identitas
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
              marginTop: "0px",
              padding: "20px",
              boxSizing: "border-box",
              backgroundColor: "#D4DBD9",
              textAlign: "left",
            }}
          >
            <ul
              style={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "16px",
                paddingLeft: "425px",
                marginBottom: "20px",
              }}
            >
              <li>Pendaki wajib membawa kartu identitas.</li>
              <li>
                Pendaki yang berasal dari luar JATENG DIY, tetapi berdomisili di
                JATENG DIY <br />
                diwajibkan untuk membawa surat keterangan RT/RW setempat.
              </li>
              <li>Tidak menerima pendaki dari zona merah</li>
            </ul>
          </div>
          <div
            style={{
              backgroundColor: "#30433E",
              borderRadius: "17px",
              width: "fit-content",
              padding: "15px",
              position: "relative",
              marginBottom: "8px",
              marginTop: "20px",
              marginLeft: "-27px",
            }}
          >
            <svg
              height="26"
              width="30"
              style={{
                position: "absolute",
                left: "13",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="#D4DBD9"
                strokeWidth="2"
                fill="#30433E"
              />
            </svg>
            <span
              style={{ color: "white", marginLeft: "35px", lineHeight: "25px" }}
            >
              Wajib Mematuhi Peraturan Basecamp
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
              marginTop: "0px",
              padding: "20px",
              boxSizing: "border-box",
              backgroundColor: "#D4DBD9",
              textAlign: "left",
            }}
          >
            <ul
              style={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "16px",
                paddingLeft: "425px",
                marginBottom: "20px",
              }}
            >
              <li>Harus sopan, baik tingkah laku/perbuatan ataupun ucapan.</li>
              <li>
                Setiap pendaki wajib lapor kepada petugas basecamp sebelum dan
                sesudah pendakian.
              </li>
              <li>Membawa peralatan pendakian yang memadai.</li>
              <li>Bersedia diperiksa oleh petugas.</li>
              <li>Membawa kembali sampah.</li>
              <li>
                Dilarang mengambil, memetik, memotong tumbuhan dan bagian -
                bagiannya.
              </li>
              <li>Dilarang menangkap, membunuh, dan melukai satwa.</li>
              <li>Dilarang membawa alat musik.</li>
              <li>Dilarang membawa senjata tajan lebih dari 15 cm.</li>
              <li>Dilarang merusak sarana prasarana basecamp.</li>
              <li>Dilarang mencoret baty/vandalisme.</li>
              <li>Dilarang membawa daging segar ( kecuali ikan ).</li>
              <li>Dilarang membuang sampah di kawasan.</li>
              <li>Dilarang membuat api unggun.</li>
              <li>Dilarang mesum.</li>
              <li>
                Dilarang membawa <b>TISU BASAH</b>.
              </li>
              <li>
                Dilarang <b>NGEYEL</b>.
              </li>
            </ul>
          </div>
          <Form style={{ marginTop: "-25px" }}>
            {["checkbox"].map((type) => (
              <div key={`custom-${type}`} className="mb-3">
                <Form.Check
                  custom
                  type={type}
                  id={`custom-${type}`}
                  label={
                    <div>
                      Saya mengerti dan akan mematuhi persyaratan tersebut
                    </div>
                  }
                />
              </div>
            ))}
          </Form> */}
          {/* <Link to="/pesan">
            <Button
              variant="success"
              style={{
                fontSize:'14px',
                width: "162px",
                height: "43px",
                borderRadius: "30px",
                backgroundColor: "#1D312C",
                boxShadow:'0px 5px 10px rgba(20, 30, 25, 0.7)',
                color: "#FFF",
              }}
            >
              Pesan Sekarang
            </Button>
          </Link>
        </div>

        </div> */}
        <FooterComponent />
      </div>
    </>
  );
};

export default PanduanpesanPages;
