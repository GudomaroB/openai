import style from "../../styles/Header.module.scss";
import headerLogo from "../../assets/icon/header-logo.svg";
import { Button } from "../UI/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
export const Header = ({ logo }) => {
  const [visibleBurger, setVisibleBurger] = useState(false);
  return (
    <header className={style.header}>
      <a href="/" className={style["header-logo"]}>
        <img src={headerLogo} alt={logo} />
      </a>
      <nav className={visibleBurger ? style.nav : ""}>
        <ul>
          <li>
            <a href="#">Решения</a>
          </li>
          <li>
            <a href="#">Интеграции</a>
          </li>
          <li>
            <a href="#">Кейсы</a>
          </li>
          <li>
            <a href="#">Вебинары</a>
          </li>
        </ul>
      </nav>
      <Button type="button" className={style.btn}>
        Обсудить проект
      </Button>
      <button
        onClick={() => setVisibleBurger(!visibleBurger)}
        className={style.humburger}
      >
        {visibleBurger ? (
          <MdOutlineClose
            className={visibleBurger ? style["btn-burger-close"] : ""}
          />
        ) : (
          <RxHamburgerMenu className={style["btn-burger"]} />
        )}
      </button>
    </header>
  );
};
