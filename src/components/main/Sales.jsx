import style from "../../styles/Sales.module.scss";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube"; // Импорт стилей для эффекта куба

import SwiperComponent from "./SwiperComponent";

export const Sales = ({ swiper }) => {
  const [isNarrow, setIsNarrow] = useState(window.innerWidth < 992);

  useEffect(() => {
    const widthHandler = () => {
      setIsNarrow(window.innerWidth < 992);
    };
    widthHandler(); // Установить начальное значение

    window.addEventListener("resize", widthHandler);
    return () => {
      window.removeEventListener("resize", widthHandler);
    };
  }, []); // Пустой массив зависимостей

  return (
    <section className={style.sales}>
      <h1 className={style["sales__title"]}>
        Как AI по<span>может</span> твоему бизнесу?
      </h1>
      {isNarrow ? (
        <div className={style["sw-flex"]}>
          <SwiperComponent swiper={swiper} />
          <SwiperComponent swiper={swiper} />
          <SwiperComponent swiper={swiper} />
        </div>
      ) : (
        <SwiperComponent swiper={swiper} />
      )}
    </section>
  );
};
