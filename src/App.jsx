import React from 'react';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import Button from '../Button/Button';
import PopUp from './components/PopUp/PopUp';
import Booking from 'components/Booking/Booking';
import LoginCard from 'components/LoginCard/LoginCard';
import RegistrationCard from 'components/RegistrationCard/RegistrationCard';
import TeacherCard from 'components/TeacherCard/TeacherCard';
import HeroImg from 'components/HeroImg/HeroImg';
import Hero from 'components/Hero/Hero';
import Login from 'components/Login/Login';
import Logo from 'components/Logo/Logo';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import StatisticsSection from 'components/StatisticsSection/StatisticsSection';
import Filter from 'components/Filter/Filter';
import MobileMenu from 'components/MobileMenu/MobileMenu';

const App = () => {
  return (
    <div>
      {/* <Button $registration>Click me</Button> */}
      {/* <PopUp> */}
      {/* <MobileMenu /> */}
      {/* <LoginCard /> */}
      {/* <Booking /> */}
      {/* <RegistrationCard /> */}
      {/* </PopUp> */}
      {/* <TeacherCard /> */}
      {/* <Hero /> */}
      {/* <HeroImg /> */}
      {/* <Login></Login> */}
      {/* <Logo></Logo> */}
      {/* <Header /> */}
      {/* <Footer></Footer> */}
      <StatisticsSection />
      {/* <Filter $type="theme" $title="Themes"></Filter> */}
    </div>
  );
};

export default App;
