import style from "../../styles/Lenta.module.scss";
import lentaImg from "../../assets/icon/LentarU.svg";
import vsRuImg from "../../assets/icon/vsRu.svg";
import habrImg from "../../assets/icon/habr.svg";
import rbkImg from "../../assets/icon/rbk.svg";
export const Lenta = ({ lenta, vs, habr, rbk }) => {
  return (
    <>
      <div className={style.lenta}>
        <p className={style["lenta__title"]}>О нас пишут:</p>
        <p>
          <img src={lentaImg} alt={lenta} />
        </p>
        <p>
          <img src={vsRuImg} alt={vs} />
        </p>
        <p>
          <img src={habrImg} alt={habr} />
        </p>
        <p>
          <img src={rbkImg} alt={rbk} />
        </p>
      </div>
      <div className={style.border}></div>
    </>
  );
};
