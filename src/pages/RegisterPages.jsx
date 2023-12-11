import { Formik } from "formik";
import { useState } from "react";
import axios from "axios";
// import { url_api } from "../../config";
import bglogin from "../assets/images/bglog.jpg";
import { MdLock } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../dist/css/index.css"

const RegisterPages = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div
      className="bg-login"
      style={{
        backgroundImage: `url(${bglogin})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <div
        className="form-regist"
      >
        <h2
          className="wellcome"
        >
          Daftar Akun
        </h2>

        <h4
          className="signin"
        >
          Daftar akun baru anda
        </h4>

        {message !== "" ? (
          <>
            <div
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px",
                width: "50%",
              }}
            >
              {message}
            </div>
          </>
        ) : null}

        <Formik
          initialValues={{
            username: "",
            password: "",
            role: "",
          }}
          onSubmit={(values) => {
            setTimeout(async () => {
              try {
                const res = await axios.post(`${url_api}/auth/register`, {
                  username: values.username,
                  password: values.password,
                  role: values.role,
                });

                setLoading(false);
                setMessage(res.data.message);
              } catch (err) {
                setLoading(false);
                setMessage(err.response.data.message);
              }
            }, 1000);

            setLoading(true);
          }}
        >
          {({ values, errors, handleSubmit, handleChange }) => {
            return (
              <form method="post" onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "20%",
                width: "80%",
                marginTop: "4rem"
              }}>
              <div className="inputs">
                <div style={{ marginBottom: "1%" }} className="input">
                  <MdEmail className="icon" />
                  <input
                  
                    type="text"
                    id="fullname"
                    name="fullname"
                    onChange={handleChange}
                    placeholder="Nama Lengkap"
                    required
                  />
                </div>
                <div style={{ marginBottom: "1%" }} className="input">
                <MdEmail className="icon" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    placeholder="Nama Pengguna"
                    required
                  />
                </div>
                <div style={{ marginBottom: "1%" }} className="input">
                <MdEmail className="icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
                <div style={{ marginBottom: "1%" }} className="input">
                <IoCall className="icon" />
                  <input
                    type="number"
                    id="telepon"
                    name="telepon"
                    onChange={handleChange}
                    placeholder="Nomor Telepon"
                    required
                  />
                </div>
                <div style={{ marginBottom: "1%" }} className="input">
                <MdLock className="icon" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Kata Sandi"
                    required
                  />
                </div>
                <div style={{ marginBottom: "1%" }}>
                  <label htmlFor="role">Role</label>
                  <br />
                  <select
                    name="role"
                    id="role"
                    onChange={handleChange}
                    required
                  >
                    <option value="">...</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
                </div>
                <div style={{ marginBottom: "1%" }}>
                  {loading ? (
                    <button disabled>Loading...</button>
                  ) : (
                    <button type="submit" className="styleButton">Daftar</button>
                  )}
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem"
                  }}>
                  <h5 style={{
                      fontSize: "14px",
                      color: "#fff",
                      marginTop: "5px"
                    }}>Sudah punya akun?</h5>
                    <button className="miniButton"><Link to="../Login/Layout.jsx" style={{
                          textDecoration: "none",
                          color: "#fff",
                          fontSize: "14px",
                        }}>Masuk</Link></button>
                    </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPages;
