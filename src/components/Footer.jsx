import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import FooterImg1 from "../img/Footer-telegram.svg";
import FooterImg2 from "../img/Footer-watsap.svg";
import Footer1 from "../img/footer1.svg";
import Footer2 from "../img/footer2.svg";
import Footer3 from "../img/footer3.svg";
import Footer4 from "../img/footer4.svg";
import Footertolovimg1 from "../img/footertolovimg1.svg";
import Footertolovimg2 from "../img/footertolovimg2.svg";
import Footertolovimg3 from "../img/footertolovimg3.svg";

// Footer scroll tugmasi komponenti
const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute left-[46%] right-[54%] bottom-0">
      <button
        onClick={scrollToTop}
        className="bg-transparent border border-[#ff5050] rounded-full p-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#ff5050]"
          fill="none"
          viewBox="0 0 24 15"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M19 9l-7-7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

// Footer komponenti
const Footer = () => {
  return (
    <div className="relative">
      <footer className="bg-[#212830]">
        <div className="container relative">
          <div className="pt-[60.763px] pb-[30.375px]">
            <div className="mb-12">
              <h2 className="text-5xl text-center font-bold text-white">
                Kontaktlar
              </h2>
              <p className="text-center text-[22px] text-[#B3BFC0]">
                Siz uchun qulay bo'lgan har qanday usulda biz bilan
                bog'lanishingiz mumkin.
              </p>
            </div>

            <div className="border-t pt-8 border-[#404e5f] grid grid-cols-3 gap-x-36">
              {/* Ijtimoiy tarmoqlar */}
              <div className="max-w-[286px] w-full">
                <p className="text-[#A6A9AB] text-center">Ish vaqti:</p>
                <h4 className="text-white text-[18px] font-bold items-center text-center">
                  Dushanba-Jum: 09:00 dan <br /> 17:00 gacha
                </h4>
                <h4 className="text-white text-[18px] font-bold items-center text-center">
                  Shanba: 11:00 dan 15:00 gacha
                </h4>
                <div className="items-center py-8">
                  <p className="text-center text-[#a6a9ab]">
                    Ijtimoiy tarmoqlar:
                  </p>
                  <div className="flex justify-center gap-4 mt-2">
                    <NavLink to={"https://vk.com/?roistat_visit=30302099"}>
                      <img
                        className="rounded-[50%]"
                        src={Footer1}
                        alt="footer"
                      />
                    </NavLink>
                    <NavLink to={"https://ok.ru/?roistat_visit=30302099"}>
                      <img
                        className="rounded-[50%]"
                        src={Footer2}
                        alt="footer"
                      />
                    </NavLink>
                    <NavLink to={"https://dzen.ru/?yredirect=true"}>
                      <img
                        className="rounded-[50%]"
                        src={Footer3}
                        alt="footer"
                      />
                    </NavLink>
                    <NavLink to={"https://rutube.ru/?roistat_visit=30302099"}>
                      <img
                        className="rounded-[50%]"
                        src={Footer4}
                        alt="footer"
                      />
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="max-w-[300px] w-full">
                <p className="text-[#A6A9AB] text-center">Telefonlar:</p>
                <div className="flex items-center gap-4 mb-[6px] justify-center">
                  <h4 className="text-white text-[18px] font-bold items-center text-center">
                    +998 97-999-13-07
                  </h4>
                  <img
                    className="rounded-[50%]"
                    src={FooterImg1}
                    alt="footerImg"
                  />
                </div>
                <div className="flex items-center gap-4 justify-center">
                  <h4 className="text-white text-[18px] font-bold items-center text-center">
                    +998 97-999-13-07
                  </h4>
                  <img
                    className="rounded-[50%]"
                    src={FooterImg2}
                    alt="footerImg"
                  />
                </div>
                <div className="items-center py-8 mt-3">
                  <p className="text-center text-[#a6a9ab]">Pochta:</p>
                  <h4 className="text-[18px] font-bold mt-2 text-[#ff5050] hover:border-b-[2px] border-[#ff5050] text-center">
                    Abdusattorovasilbek278@gmail.com
                  </h4>
                </div>
              </div>

              <div className="max-w-[286px] w-full h-[137.2px]">
                <p className="text-[#A6A9AB] text-center">Manzil:</p>
                <h4 className="text-white text-[18px] font-bold items-center text-center">
                  O'zbekiston,Andijon, <br />
                  Baliqchi,Chinobod
                </h4>
                <div className="py-8 mt-6 items-center">
                  <p className="text-center text-[#a6a9ab]">To'lov:</p>
                  <div className="flex justify-around items-center mt-2">
                    <img
                      className="rounded-[20px]"
                      src={Footertolovimg1}
                      alt="footerimg"
                    />
                    <img
                      className="rounded-[20px]"
                      src={Footertolovimg2}
                      alt="footerimg"
                    />
                    <img
                      className="rounded-[20px]"
                      src={Footertolovimg3}
                      alt="footerimg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between relative">
              <div>
                <p className="text-[#a6a9ab]">
                  Mualliflik huquqi © 2022 - 2024 Kompaniya nomi
                </p>
              </div>
              {/* Scroll to top tugmasi */}
              <ScrollToTopButton />
              <div className="text-[#a6a9ab]">
                <p>
                  Qo'llab-quvvatlash. Megagroup-da
                  <span className="border-[#a6a9ab] border-b">
                    <NavLink
                      to={"https://megagroup.ru/?roistat_visit=30302099"}
                    >
                      veb-saytlarni ishlab
                    </NavLink>
                  </span>
                  <span className="block ml-80 border-b border-[#a6a9ab]">
                    <NavLink
                      to={"https://megagroup.ru/?roistat_visit=30302099"}
                    >
                      chiqish.
                    </NavLink>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
