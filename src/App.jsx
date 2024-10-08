import { Header } from "./components/header/Header,";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { About } from "./components/main/About";
import { Portfolio } from "./components/main/Portfolio";
import { ai } from "./components/main/ai.jsx";
import style from "./styles/Portfolio.module.scss";
import { Lenta } from "./components/main/Lenta.jsx";
import { Sales } from "./components/main/Sales.jsx";
import { swiperSlides } from "./components/main/ai.jsx";
export const App = () => {
  return (
    <>
      <Container>
        <Header logo={"legko.ai"} />
      </Container>
      <Main>
        <Container>
          <About alt={"Responsive Image"} />
          <div className={style.port}>
            {ai.map(({ title, icon, num }) => (
              <Portfolio key={title} title={title} icon={icon} num={num} />
            ))}
          </div>
          <Lenta rbk={"RBK"} lenta={"Lenta RU"} vs={"vs RU"} habr={"habr"} />
          <Sales swiper={swiperSlides} />
        </Container>
      </Main>
    </>
  );
};
