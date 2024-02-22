import React from 'react';
import PropTypes from 'prop-types';
import { StyledBooking } from './Booking.styled';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import avatar from '../../images/block-1.jpg';
import FormTitle from 'components/FormTitle/FormTitle';

const Booking = ({ name, surname, avatar_url = avatar }) => {
  return (
    <StyledBooking>
      <FormTitle
        $title="Book trial lesson"
        $text="Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs."
      />
      <div className="image-wrapper">
        <div className="image-thumb">
          <img src={avatar_url ?? avatar} alt="Your teacher" />
        </div>
        <div>
          <p className="teacher-title">YourTeacher</p>
          <p>
            <span>{name}</span>
            <span>{surname}</span>
          </p>
        </div>
      </div>
      <h2 className="radio-title">
        What is your main reason for learning English?
      </h2>
      <fieldset className="radio-group">
        <div className="radio-wrapper">
          <input type="radio" id="reason_career" value="career" name="reason" />
          <label htmlFor="reason_career">Career and business</label>
        </div>
        <div className="radio-wrapper">
          <input type="radio" id="reason_kids" value="kids" name="reason" />
          <label htmlFor="reason_kids">Lesson for kids</label>
        </div>
        <div className="radio-wrapper">
          <input type="radio" id="reason_abroad" value="abroad" name="reason" />
          <label htmlFor="reason_abroad">Living abroad</label>
        </div>
        <div className="radio-wrapper">
          <input
            type="radio"
            id="reason_coursework"
            value="coursework"
            name="reason"
          />
          <label htmlFor="reason_coursework">Exams and coursework</label>
        </div>
        <div className="radio-wrapper">
          <input type="radio" id="reason_travel" value="travel" name="reason" />
          <label htmlFor="reason_travel">Culture, travel or hobby</label>
        </div>
      </fieldset>
      <fieldset className="input-group">
        <Input
          type="text"
          name="full_name"
          placeholder="Full Name"
          autoComplete="name"
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
        />
        <Input
          type="tel"
          name="tel"
          placeholder="Phone number"
          autoComplete="tel"
        />
      </fieldset>
      <Button $size="large">Book</Button>
    </StyledBooking>
  );
};

Booking.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  avatar_url: PropTypes.string,
};

export default Booking;
