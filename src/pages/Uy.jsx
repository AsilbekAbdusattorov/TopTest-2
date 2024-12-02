import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Tap from '../components/Tap'
import KompaniyaHaqida from '../components/KompaniyaHaqida'
import Sharhlar from '../components/Sharhlar'
import Afzalliklar from '../components/Afzalliklar'
import MahsusTakliflar from '../components/MahsusTakliflar'
import SavolJavob from '../components/Savol-javob'
import UlarBizgaIshonishadi from '../components/UlarBizgaIshonishadi'
const Uy = () => {
  return (
    <div>
      <div className='py-4'>
        <div className='container'>
          <div className='grid grid-cols-3 gap-44'>

            <div>
              <span className='text-black/50'>
                <font>O'zbekiston, 125040, Andijon, </font>
                <br />
                <font>Baliqchi Chinobod, bino</font>
              </span>
            </div>

            <div>
              <span className='text-black/50 mx-6 my-3'>
              <Link to='/'>
                <font className='text-2xl text-black font-bold text-center'>Shirkat nomi</font>
              </Link>
                <br />
                <font>Yuridik xizmatlar veb-sayti</font>
              </span>
            </div>

            <div>
              <span className='text-black/50'>
              <Link to='/'>
                <font className='text-2xl text-black font-bold'>+998 ( 97 ) 999-13-07</font>
              </Link>
                <br />
                <font>Dushanba-Yakshanba: 09:00 dan 17:00 gacha</font>
              </span>
            </div>

          </div>
        </div>
      </div>
      <Hero/>
      <Tap/>
      <KompaniyaHaqida/>
      <Sharhlar/>
      <Afzalliklar/>
      <MahsusTakliflar/>
      <SavolJavob/>
      <UlarBizgaIshonishadi/>
    </div>
  )
}

export default Uy