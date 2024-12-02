import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Mahsustaklifimg1 from "../img/Mahsustaklifimg1.webp";
import Mahsustaklifimg2 from "../img/Mahsustaklifimg2.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

const MahsusTakliflar = () => {
  return (
    <div className="bg-[#F2F8FB]">
      <div className="mt-6 py-[121.525px] border-t">
        <div className="container">
          <h2 className="text-center font-bold text-5xl">Maxsus takliflar</h2>
          <p className="text-[22px] text-center text-[#5E5E82] mb-12">
            Xizmat uchun to'lash pulingiz yo'qmi? <br />
            Bizda yechim bor
          </p>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true} // Loopni yoqamiz
            modules={[Parallax, Pagination, Navigation]}
            className="mySwiper"
          >
            <div
              slot="container-start"
              className="parallax-bg"
              style={{
                backgroundColor: "red", // Fonni qizil qilamiz
              }}
              data-swiper-parallax="-23%"
            ></div>

            {/* Birinchi slayd */}
            <SwiperSlide>
              <div className="mx-auto bg-red-400">
                <div className="px-16 pt-16 pb-10">
                  <div className="flex items-center justify-between">
                    <img
                      className="w-[587.2px] h-[352.31px]"
                      src={Mahsustaklifimg1}
                      alt="Mahsus Taklif"
                    />
                    <div className="space-y-5">
                      <NavLink
                        to={"#"}
                        className="text-[28px] font-semibold cursor-pointer text-white"
                      >
                        Sudda vakillik va yuridik xizmatlar -20%
                      </NavLink>
                      <p className="text-lg text-[#FFCDCD]">
                        Professional yuridik yordam va maslahat: fuqarolik va{" "}
                        <br /> meros ishlarida
                      </p>
                      <button className="px-6 py-5 cursor-pointer bg-white rounded-full text-xl font-medium text-center max-w-[240px] w-full mt-6">
                        Xizmatni oling
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Ikkinchi slayd */}
            <SwiperSlide>
              <div className="mx-auto bg-red-400">
                <div className="px-16 pt-16 pb-10">
                  <div className="flex items-center justify-between">
                    <img
                      className="w-[587.2px] h-[352.31px]"
                      src={Mahsustaklifimg2}
                      alt="Mahsus Taklif"
                    />
                    <div className="space-y-5">
                      <NavLink
                        to={"#"}
                        className="text-[28px] font-semibold cursor-pointer text-white"
                      >
                        Tajribali yuristlar va advokatlar -10%
                      </NavLink>
                      <p className="text-lg text-[#FFCDCD]">
                        Siz kompaniyamizning eng yaxshi advokatlari va
                        advokatlariga <br /> ishonishingiz mumkin
                      </p>
                      <button className="px-6 py-5 cursor-pointer bg-white rounded-full text-xl font-medium text-center max-w-[240px] w-full mt-6">
                        Biz bilan bog'lanish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MahsusTakliflar;
