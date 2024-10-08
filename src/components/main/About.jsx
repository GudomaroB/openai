import style from "../../styles/About.module.scss";
import { Button } from "../UI/Button";
import imgBig from "../../assets/images/aboutBgBig.png";
import imgMin from "../../assets/images/aboutBgMin.png";
export const About = ({ alt }) => {
  return (
    <section className={style.about}>
      <div className={style.ai}>
        <h1>
          С AI <span>легко</span>
        </h1>
        <p className={style.description}>
          Продавай больше с AI скорингом заявок и аудитом записанных звонков
        </p>
        <div className={style.buttons}>
          <Button className={style["vebinar"]} type={"button"}>
            записаться на вебинар
          </Button>
          <Button className={style["more"]} type={"button"}>
            Узнать больше
          </Button>
        </div>
      </div>
      <div className={style.images}>
        <picture>
          <source media="(min-width: 1000px)" srcSet={imgBig}></source>
          <source media="(max-width: 902px)" srcSet={imgMin}></source>
          <img src={imgBig} alt={alt}></img>
        </picture>
      </div>
    </section>
  );
};
