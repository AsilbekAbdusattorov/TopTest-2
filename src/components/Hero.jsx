import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroImg1 from '../img/HeroImg1.webp';
import HeroImg2 from '../img/HeroImg2.webp';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Button } from '@material-tailwind/react';

const Hero = () => {
  return (
    <>
      <Swiper
      loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='h-[629.75px] w-full object-cover' src={HeroImg1} alt="Bosh sahifadagi rasm 1" />
          <div className="container absolute inset-0 grid h-full w-full place-items-center">
              <div className="mx-auto w-3/4 text-center md:w-2/4">
                <h1
                  variant="h1"
                  color="white"
                  className="mb-4 text-5xl font-bold text-white"
                >
                  Yuridik xizmatlar
                </h1>
                <h2
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80 text-[22px] text-white"
                >
                  Professional advokatlar va advokatlar jamoasi huquqning istalgan sohasidagi nizolarni hal qilishda yordam ko'rsatishga qodir.
                </h2>
                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white" variant="text" className='bg-[#ff5050] hover:bg-[#ff5050] cursor-pointer py-5 px-6 rounded-[250px] text-xl font-medium text-center'>
                    Biz bilan bog'lanish
                  </Button>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[629.75px] w-full object-cover' src={HeroImg2} alt="Bosh sahifadagi rasm 2" />
          <div className="container absolute inset-0 grid h-full w-full place-items-center">
              <div className="w-3/4 text-center md:w-2/4">
                <h1
                  variant="h1"
                  color="white"
                  className="mb-4 text-5xl font-bold text-white"
                >
                  Bizning tajribamiz va bilimimiz sizning muammolaringizga yechimdir!
                </h1>
                <h2
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80 text-[22px] text-white"
                >
                
                  Biz bilan bog'laning, biz sizga maslahat beramiz va biz eng yaxshi variantlarni tanlaymiz.
                </h2>
                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white" variant="text" className='bg-[#ff5050] hover:bg-[#ff5050] cursor-pointer py-5 px-6 rounded-[250px] text-xl font-medium text-center'>
                    Biz bilan bog'lanish
                  </Button>
                </div>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Hero;