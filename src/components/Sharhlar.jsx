import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { sharhlar } from "../data";
const Sharhlar = () => {
  return (
    <div className="bg-[#F2F8FB] py-[121.525px] border-t">
      <div className="container">
        <h2 className="text-center text-5xl font-bold">Sharhlar</h2>
        <p className="text-center text-[22px] text-[#8f8f8f] mb-12">
          Biz mijozlarning so'rovlarini muvaffaqiyatli bajaramiz <br />
          va qiyin muammolarni arzon narxda samarali hal qilamiz.
        </p>
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true} // cheksiz aylantirish
          navigation={true} // oldinga va orqaga tugmalar
          slidesPerView={2} // ekranda ko'rinadigan slaydlar soni 2 ta
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {sharhlar.map((sharh, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white mb-8 mx-4 border px-16 py-16">
                <div className="">
                  <div className="max-w-[538.4px]">
                    <div className="flex items-center space-x-6 pb-6">
                      <img
                        src={sharh.img}
                        alt={sharh.name}
                        className="w-[120px] h-[120px] rounded-full mb-4"
                      />
                      <div>
                        <h3 className="text-[28px] font-semibold">
                          {sharh.name}
                        </h3>
                        <p className="text-lg text-[#8F8F8F]">Moskva</p>
                      </div>
                      <svg
                        className="relative left-16"
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 96 64"
                        data-prefix="i4ww739zg"
                      >
                        <path
                          d="M55.24 64c8.52-5.344 15.13-12.046 19.46-21.152-9.29-1.008-16.27-5.117-19.63-13.8-3.17-8.175-1.82-15.879 4.34-22.255 6.37-6.574 14.22-8.441 22.81-5.3 8.3 3.031 12.94 9.387 13.67 18.126 1.72 20.728-14.68 40.855-35.33 43.683-1.77.23-3.54.458-5.32.698zM1.83 64c8.51-5.344 15.13-12.046 19.46-21.152-9.3-1.008-16.28-5.117-19.64-13.8C-1.51 20.873-.17 13.169 6 6.793c6.36-6.574 14.21-8.441 22.8-5.3 8.3 3.031 12.94 9.387 13.67 18.126 1.72 20.728-14.68 40.855-35.33 43.683-1.77.23-3.54.458-5.31.698z"
                          fill="#f2f2f2"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <hr className="mb-6 border-[#ff5050]" />
                    <p className="text-[#8f8f8f] text-lg cursor-default">
                      {sharh.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sharhlar;
