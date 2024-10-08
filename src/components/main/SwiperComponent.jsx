// SwiperComponent.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCube, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";
import style from "../../styles/Sales.module.scss";

const SwiperComponent = ({ swiper }) => (
  <Swiper
    className={style["swiper-block"]}
    modules={[Navigation, EffectCube, Autoplay]}
    effect="cube"
    cubeEffect={{
      shadow: true,
      slideShadows: true,
      shadowOffset: 15,
      shadowScale: 0.94
    }}
    slidesPerView={1}
    navigation={{
      nextEl: `.${style["sw-btn-next"]}`,
      prevEl: `.${style["sw-btn-prev"]}`,
      clickable: true
    }}
    loop={true}
    speed={500}
    touchRatio={1}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false // Продолжать автоплей после взаимодействия
    }}
  >
    {swiper.map(
      ({ title, descr, img, btn, autoVoronki, chatBot, analytic }) => (
        <SwiperSlide key={img}>
          <div className={style.slider}>
            <div className={style.slide}>
              <h2 className={style["slide__title"]}>{title}</h2>
              <p className={style["slide__descr"]}>{descr}</p>
              <button className={style["slide__btn"]}>{btn}</button>
            </div>
            <div className={style.images}>
              <img src={img} alt={title} />
              <div className={style.content}>
                <span>{autoVoronki}</span>
                <span>{chatBot}</span>
                <span>{analytic}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      )
    )}
    <button className={style["sw-btn-prev"]}>
      <FiChevronLeft className={style["swiper-button-prev"]} />
    </button>
    <button className={style["sw-btn-next"]}>
      <FiChevronRight className={style["swiper-button-next"]} />
    </button>
  </Swiper>
);

export default SwiperComponent;
