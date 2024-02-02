import React from 'react';
import { StyledTeacherCard } from './TeacherCard.styled';

const TeacherCard = ({
  name,
  surname,
  languages,
  levels,
  rating,
  reviews,
  price_per_hour,
  lessons_done,
  avatar_url,
  lesson_info,
  conditions,
  experience,
  isOnline,
  children,
}) => {
  return (
    <StyledTeacherCard>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
    </StyledTeacherCard>
  );
};

export default TeacherCard;
