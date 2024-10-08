import style from "../../styles/Portfolio.module.scss";

export const Portfolio = ({ num, title, icon }) => {
  return (
    <div className={style.port}>
      <div className={style["card"]}>
        <div className={style["card__block"]}>
          <p>{num}</p>
          <h3>{title}</h3>
        </div>
        <div className={style["card__icon"]}>{icon}</div>
      </div>
    </div>
  );
};
