import React from "react";
import { Cards } from "../data.js"; // Ma'lumotlarni import qilish

const Card = ({ title, description, image }) => {
  return (
    <div className="relative flex items-center justify-center p-6 shadow-lg group">
      {/* Rasmni absolute qilib o'rnatamiz */}
      <img
        src={image}
        alt={title}
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      {/* Hover effekti bilan qora qatlam qo'shamiz */}
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
      {/* Matnni ustiga joylashtirish uchun relative va z-index qo'shamiz */}
      <div className="relative z-10 py-8 px-8 text-center text-white  my-[145.087px]">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="w-16 h-1 bg-red-500 mb-4 mx-auto"></div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const CardSection = () => {
  return (
    <div className="py-[121.525px]">
      <div className="container">
        <h2 className="text-center text-5xl font-bold">Afzalliklar</h2>
        <p className="text-center text-[22px] text-[#5E5E82]">Qiyin narsa darhol amalga oshiriladi, <br />imkonsiz narsa biroz ko'proq vaqt oladi.</p>
        <div className="grid grid-cols-3 gap-8 px-6 py-12">
          {Cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
