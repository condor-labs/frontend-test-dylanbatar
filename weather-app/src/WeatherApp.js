import { Header } from "./components/Sections/Header/Header";
import { Slide } from "./components/Sections/Slide/Slide";
import "./styles.scss";

const WeatherApp = () => {
  return (
    <div>
      <Header />
      <section>
        <Slide></Slide>
      </section>
    </div>
  );
};

export default WeatherApp;
