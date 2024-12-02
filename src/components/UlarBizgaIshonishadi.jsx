import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles

// Import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import UlarBizgaishonishadiimg1 from "../img/UlarBizgaishonishadiimg1.svg";
import UlarBizgaishonishadiimg2 from "../img/UlarBizgaishonishadiim2.svg";
import UlarBizgaishonishadiimg3 from "../img/UlarBizgaishonishadiimg3.svg";
import UlarBizgaishonishadiimg4 from "../img/UlarBizgaishonishadiimg4.svg";
import UlarBizgaishonishadiimg5 from "../img/UlarBizgaishonishadiimg5.svg";
import { NavLink } from "react-router-dom";

const UlarBizgaIshonishadi = () => {
  return (
    <div className="bg-white py-[121.525px]">
      <div className="relative">
        <div className="container">
          <h2 className="text-center font-bold text-5xl">
            Ular bizga shonishadi
          </h2>
          <p className="text-lg text-black/50 text-center pb-12">
            Ishimiz davomida biz ko'plab kompaniyalar bilan muvaffaqiyatli
            ishladik.
          </p>
          <Swiper
            slidesPerView={4}
            freeMode={true}
            loop={true}
            spaceBetween={30} // SpaceBetween'ni kamaytirdim
            pagination={{
              clickable: true,
            }}
            centeredSlides={true} // Bu slaydlarni markazlashtiradi
            navigation={true}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <NavLink
                to={"/"}
                className="text-center  hover:grayscale-0 grayscale hover:shadow-xl  transition duration-300"
              >
                <div className=" border w-[284.4px] h-[258.44px]">
                  <div className="p-8">
                    <img
                      src={UlarBizgaishonishadiimg1}
                      alt="exposition"
                      className="mx-auto w-[220px] h-[132px]"
                    />
                    <div className="my-3 w-6 h-0.5 bg-red-500 mx-auto"></div>
                    <p className="text-gray-500">"Ko'rgazma"</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>

            <SwiperSlide className="">
              <NavLink
                to={"/"}
                className="text-center  hover:grayscale-0 grayscale hover:shadow-xl  transition duration-300"
              >
                <div className=" border w-[284.4px] h-[258.44px]">
                  <div className="p-8">
                    <img
                      src={UlarBizgaishonishadiimg2}
                      alt="exposition"
                      className="mx-auto w-[220px] h-[132px]"
                    />
                    <div className="my-3 w-6 h-0.5 bg-red-500 mx-auto"></div>
                    <p className="text-gray-500">"Sörf to'lqini"</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>

            <SwiperSlide className="">
              <NavLink
                to={"/"}
                className="text-center  hover:grayscale-0 grayscale hover:shadow-xl  transition duration-300"
              >
                <div className=" border w-[284.4px] h-[258.44px]">
                  <div className="p-8">
                    <img
                      src={UlarBizgaishonishadiimg3}
                      alt="exposition"
                      className="mx-auto w-[220px] h-[132px]"
                    />
                    <div className="my-3 w-6 h-0.5 bg-red-500 mx-auto"></div>
                    <p className="text-gray-500">"Sayohat maslahatchisi"</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>

            <SwiperSlide className="">
              <NavLink
                to={"/"}
                className="text-center  hover:grayscale-0 grayscale hover:shadow-xl  transition duration-300"
              >
                <div className=" border w-[284.4px] h-[258.44px]">
                  <div className="p-8">
                    <img
                      src={UlarBizgaishonishadiimg4}
                      alt="exposition"
                      className="mx-auto w-[220px] h-[132px]"
                    />
                    <div className="my-3 w-6 h-0.5 bg-red-500 mx-auto"></div>
                    <p className="text-gray-500">Lavado mehmonxonasi</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>

            <SwiperSlide className=" pb-24">
              <NavLink
                to={"/"}
                className="text-center  hover:grayscale-0 grayscale hover:shadow-xl  transition duration-300"
              >
                <div className=" border w-[284.4px] h-[258.44px]">
                  <div className="p-8">
                    <img
                      src={UlarBizgaishonishadiimg5}
                      alt="exposition"
                      className="mx-auto w-[220px] h-[132px]"
                    />
                    <div className="my-3 w-6 h-0.5 bg-red-500 mx-auto"></div>
                    <p className="text-gray-500">"Net dizayn"</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default UlarBizgaIshonishadi;
