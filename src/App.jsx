import { Routes, Route} from "react-router-dom"

import HomePages from "./pages/HomePages"
import AboutPages from "./pages/AboutPages";
import VisiMisiPages from "./pages/VisiMisiPages";
import SejarahPages from "./pages/SejarahPages";
import ArtikelPages from "./pages/ArtikelPages";
import AkunPages from "./pages/AkunPages";
import EditakunPages from "./pages/EditakunPages";
import PanduanpesanPages from "./pages/PanduanpesanPages";
import GaleriPages from "./pages/GaleriPages";
import VideoPages from "./pages/VideoPages";
import BookingPages from "./pages/BookingPages";
import Riwayat1Pages from "./pages/Riwayat1Pages";
import Riwayat2Pages from "./pages/Riwayat2Pages";
import Riwayat3Pages from "./pages/Riwayat3Pages";
import Riwayat4Pages from "./pages/Riwayat4Pages";
import Riwayat5Pages from "./pages/Riwayat5Pages";
import UlasanPages from "./pages/UlasanPages";
import ArtikelPages1 from "./pages/ArtikelPages1";
import ArtikelPages2 from "./pages/ArtikelPages2";
import ArtikelPages3 from "./pages/ArtikelPages3";
import BookingFormPages from "./pages/BookingformPages";
import BookingForm2Pages from "./pages/Bookingform2Pages";
import BookingForm3Pages from "./pages/Bookingform3Pages";










function App() {
  return (
  <div>
    {/* <NavbarComponent/> */}

  <Routes>
    {/* <Route path="/register" component={RegisterPages}/> */}
    <Route path="/" Component={HomePages}/>
    <Route path="/about" Component={AboutPages}/>
    <Route path="/sejarah" Component={SejarahPages}/>
    <Route path="/visimisi" Component={VisiMisiPages}/>
    <Route path="/artikel" Component={ArtikelPages}/>
    <Route path="/artikel1" Component={ArtikelPages1}/>
    <Route path="/artikel2" Component={ArtikelPages2}/>
    <Route path="/artikel3" Component={ArtikelPages3}/>
    <Route path="/galeri" Component={GaleriPages}/>
    <Route path="/video" Component={VideoPages}/>
    <Route path="/panduan" Component={PanduanpesanPages}/>
    <Route path="/booking" Component={BookingPages}/>
    <Route path="/bookingform" Component={BookingFormPages}/>
    <Route path="/bookingform2" Component={BookingForm2Pages}/>
    <Route path="/bookingform3" Component={BookingForm3Pages}/>
    <Route path="/ulasan" Component={UlasanPages}/>
    <Route path="/akun" Component={AkunPages}/>
    <Route path="/editakun" Component={EditakunPages}/>
    <Route path="/riwayat1" Component={Riwayat1Pages}/>
    <Route path="/riwayat2" Component={Riwayat2Pages}/>
    <Route path="/riwayat3" Component={Riwayat3Pages}/>
    <Route path="/riwayat4" Component={Riwayat4Pages}/>
    <Route path="/riwayat5" Component={Riwayat5Pages}/>
   

    
    
  
   
  </Routes>

 
  </div>
  );
}
 
export default App
