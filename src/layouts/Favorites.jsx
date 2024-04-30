import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import './Favorites.css'

import Cheese1 from '/src/assets/webp/cheese.webp'
import Chip1 from '/src/assets/webp/favorite-chips-1.webp'
import Chip2 from '/src/assets/webp/favorite-chips-2.webp'
import Chip3 from '/src/assets/webp/favorite-chips-3.webp'
import Leaf1 from '/src/assets/webp/leaf-1.webp'
import Leaf2 from '/src/assets/webp/leaf-2.webp'

export default function Favorites() {
  return (
    <>
      <section className="favorite section" id="favorites">
        <div className="favorite__container container grid">
          <div className="favorite__data">
            <h2 className="section__title">DISCOVER YOUR FAVORITE FLAVORS</h2>
            <p className="favorite__description">
              Try some exotic flavors or delicious toppings. We have collected
              some delicious snack recipes from around the world for you.
            </p>
            <img src={Cheese1} alt="cheese img" className="favorite__cheese-1" />
            <img src={Cheese1} alt="cheese img" className="favorite__cheese-2" />
          </div>
          <div className="favorite__swiper">
            <Swiper
              spaceBetween={50}
              slidesPerView={'auto'}
              centeredSlides={'auto'}
              loop={true}
            >
              <SwiperSlide className="favorite__article">
                <img src={Chip1} alt="chips img" className="favorite__img" />
                <img src={Leaf1} alt="leaf img" className="favorite__leaf-1" />
                <img src={Leaf2} alt="leaf img" className="favorite__leaf-2" />
              </SwiperSlide>
              <SwiperSlide className="favorite__article">
                <img src={Chip2} alt="chips img" className="favorite__img" />
                <img src={Leaf1} alt="leaf img" className="favorite__leaf-1" />
                <img src={Leaf2} alt="leaf img" className="favorite__leaf-2" />
              </SwiperSlide>
              <SwiperSlide className="favorite__article">
                <img src={Chip3} alt="chips img" className="favorite__img" />
                <img src={Leaf1} alt="leaf img" className="favorite__leaf-1" />
                <img src={Leaf2} alt="leaf img" className="favorite__leaf-2" />
              </SwiperSlide>

              <SwiperSlide className="favorite__article">
                <img src={Chip1} alt="chips img" className="favorite__img" />
                <img src={Leaf1} alt="leaf img" className="favorite__leaf-1" />
                <img src={Leaf2} alt="leaf img" className="favorite__leaf-2" />
              </SwiperSlide>
              <SwiperSlide className="favorite__article">
                <img src={Chip2} alt="chips img" className="favorite__img" />
                <img src={Leaf1} alt="leaf img" className="favorite__leaf-1" />
                <img src={Leaf2} alt="leaf img" className="favorite__leaf-2" />
              </SwiperSlide>
              <SwiperSlide className="favorite__article">
                <img src={Chip3} alt="chips img" className="favorite__img" />
                <img src={Leaf1} alt="leaf img" className="favorite__leaf-1" />
                <img src={Leaf2} alt="leaf img" className="favorite__leaf-2" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}
