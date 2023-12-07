import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const artikel = [
  {
    id: 1,
    title: "Bikin Merinding, Inilah Mitos dan Misteri Gunung Sindoro",
    desc: "Gunung Sindoro yang juga dikenal dengan sebutan Gunung Sindara atau Sundoro merupakan salah..... ",
    images: "/artikel5.png",
  },
  {
    id: 2,
    title: "Cara Mengatasi Hiportemia yang Benar",
    desc: "Langkah-langkah krusial yang harus diambil sebelum memulai perjalanan mendaki. Dari perencanaan rute hing...",
    images: "/artikel2.png",
  },

  {
    id: 3,
    title: "Keindahan dan Tantangan Gunung Sindoro",
    desc: "Gunung Sindoro, dengan kemegahan puncaknya yang mencapai 3.153 meter di atas permukaan laut, mengund...",
    images: "/artikel3.png",
  },
  {
    id: 4,
    title: "Gunung Sindoro, Sembunyikan Keindahan dalam Jalur yang Menantang ",
    desc: "Gunung Sindoro, dengan kemegahan puncaknya yang mencapai 3.153 meter di atas permukaan laut, mengund...",
    images: "/artikel2.png",
  },

];


const CardartikelComponent = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  // };

  return (
    // <div className='cardhomeartikel'>
    //   <div className="">
    //     <Slider  className='slider'{...settings}>
    //       {artikel.map((art) => (  
    //             <div className="card-artikel slide"  key={art.id}> 
    //             <img src={art.images} alt="Gambar Card"/>
    //             <div className="card-body">
    //               <h2 className="text-white fs-4 fw-bold">{art.title}</h2>
    //               <p className="  fs-6">{art.desc}</p>
    //             </div>
                
    //             </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </div>

<Swiper 
slidesPerView={3}
spaceBetween={29}
freeMode={true}
pagination={{
  clickable: true,
}}
modules={[FreeMode, Pagination]}
className="mySwiper mt-6"
>
<div>
  {artikel.map((art) => (
    <SwiperSlide className='mt-5 mb-5 ' >
      <div className="card-swipe  " key={art.id}>
        <img  src={art.images} alt="Gambar Card" />  
        <div className="card-body justify-content-center">
          <h2 className="text-white fs-6 fw-bold">{art.title}</h2>
          <p className="fs-7">{art.desc}</p>

        </div>
      </div>
    </SwiperSlide>
  ))}
</div>
</Swiper>
  )
}

export default CardartikelComponent