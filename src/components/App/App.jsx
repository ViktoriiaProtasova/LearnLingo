import React from 'react';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import Button from '../Button/Button';
import PopUp from '../PopUp/PopUp';
import Booking from 'components/Booking/Booking';
import LoginCard from 'components/LoginCard/LoginCard';
import RegistrationCard from 'components/RegistrationCard/RegistrationCard';
import TeacherCard from 'components/TeacherCard/TeacherCard';
import TeacherLevel from 'components/TeacherLevel/TeacherLevel';

const App = () => {
  return (
    <div>
      {/* <Button $registration>Click me</Button> */}
      {/* <PopUp>
        <LoginCard></LoginCard>
        <Booking></Booking>
        <RegistrationCard></RegistrationCard>
      </PopUp> */}
      <TeacherCard></TeacherCard>
    </div>
  );
};

export default App;
