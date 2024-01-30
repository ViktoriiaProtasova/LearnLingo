import React from 'react';
import PropTypes from 'prop-types';
import { StyledBooking } from './Booking.styled';

const Booking = ({ name, surname, avatar_url }) => {
  return (
    <StyledBooking>
      <div className="image-wrapper">
        <img src={avatar_url} alt="Your teacher" />
        <div>
          <p>YourTeacher</p>
          <p>
            <span>{name}</span>
            <span>{surname}</span>
          </p>
        </div>
      </div>
      <h2>What is your main reason for learning English?</h2>
      <fieldset>
        <div>
          <label htmlFor="reason_career">Career and business</label>
          <input
            type="radio"
            id="reason_career"
            value="career"
            name="reason"
            checked
          />
        </div>

        <div>
          <label htmlFor="reason_kids">Lesson for kids</label>
          <input type="radio" id="reason_kids" value="kids" name="reason" />
        </div>

        <div>
          <label htmlFor="reason_abroad">Living abroad</label>
          <input type="radio" id="reason_abroad" value="abroad" name="reason" />
        </div>

        <div>
          <label htmlFor="reason_coursework">Exams and coursework</label>
          <input
            type="radio"
            id="reason_coursework"
            value="coursework"
            name="reason"
          />
        </div>

        <div>
          <label htmlFor="reason_travel">Culture, travel or hobby</label>
          <input type="radio" id="reason_travel" value="travel" name="reason" />
        </div>
      </fieldset>
    </StyledBooking>
  );
};

Booking.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  avatar_url: PropTypes.string,
};

export default Booking;
