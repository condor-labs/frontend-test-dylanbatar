import { Header } from './components/Sections/Header/Header';
import { Slide } from './components/Sections/Slide/Slide';
import { Suggets } from './components/Sections/Suggets/Suggets';
import { VisitPlace } from './components/Sections/VisitPlace/VisitPlace';
import './styles.scss';

const WeatherApp = () => {
  return (
    <div>
      <Header />
      {/* <section>
        <Slide />
      </section>
      <Suggets /> */}
      <VisitPlace />
    </div>
  );
};

export default WeatherApp;
