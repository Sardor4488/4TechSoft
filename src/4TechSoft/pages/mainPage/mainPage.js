import { Button } from '@mui/material'
import {React, SwiperSlide} from 'react' 
import { Link } from 'react-router-dom'
import Swiper from 'swiper'
import { Navigation } from "swiper";
import MainPageCss from './mainPageCss'
const MainPage = () => {
  return (
    <MainPageCss>
       <>
         <div className='main_page '>
          {/* <Swiper Navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper> */}
          </div>
       </>
    </MainPageCss>
  )
}

export default MainPage