import React from 'react';
// import Button from '../Button/Button';
import PopUp from '../PopUp/PopUp';
import Booking from 'components/Booking/Booking';
import LoginCard from 'components/LoginCard/LoginCard';

const App = () => {
  return (
    <div>
      {/* <Button $registration>Click me</Button> */}
      <PopUp>
        {/* <LoginCard></LoginCard> */}
        <Booking></Booking>
      </PopUp>
    </div>
  );
};

export default App;
