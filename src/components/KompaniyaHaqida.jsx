import React from 'react';
import KompaniHaqida from '../img/Kompaniyahaqida.webp'

const KompaniyaHaqida = () => {
  return (
    <div className="flex justify-center items-center bg-[#f4f8fc] py-[121.525px] px-4">
      <div className="container grid grid-cols-2">
        {/* Chap tomon - rasm */}
        <div className="w-[506px] h-[601px]">
          <img
            className="w-ful h-full object-cover"
            src={KompaniHaqida}
            alt="Kompanija haqida"
          />
        </div>

        {/* O'ng tomon - matn */}
        <div className="flex flex-col justify-center -ml-28 -mt-16">
          <h2 className="text-5xl font-bold text-black mb-4">Kompaniya haqida</h2>
          <p className="text-xl text-gray-600 mb-8">
            Bizning tajribamiz va bilimimiz sizning muammolaringizga yechimdir! Yurisprudentsiya sohasida, birinchi navbatda,
            sudda huquq va manfaatlarni himoya qilish bo‘yicha ko‘p yillik tajribaga ega bo‘lgan jamoamiz sifatli
            yuridik xizmatlar ko‘rsatish va huquqning turli sohalaridagi nizolarni muvaffaqiyatli hal etishga qaratilgan.
            Biz bunga amaliy va innovatsion huquqiy yechimlar orqali erishamiz. Har bir inson o‘z huquq va manfaatlarini himoya
            qilishda ishonchli huquqiy yordamga loyiqdir.
          </p>

          {/* Tekshirish belgilar */}
          <ul className="space-y-4 mb-8 text-black">
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔</span> 
              <span className="text-lg">10 yillik muvaffaqiyatli ish</span>
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔</span> 
              <span className="text-lg">Ishlarning 92 foizi g‘alaba qozondi</span>
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔</span> 
              <span className="text-lg">Individual dastur</span>
            </li>
          </ul>

          {/* Tugma */}
          <button className="bg-white border mt-12 hover:border-red-500 py-5 px-6 rounded-full text-xl font-medium text-center hover:bg-red-100/20 cursor-pointer max-w-[240px]">
            Biz bilan bog'lanish
          </button>
        </div>

      </div>
    </div>
  );
};

export default KompaniyaHaqida;
