import React from 'react';
import { StyledTeacherCard } from './TeacherCard.styled';
import TeacherLevel from 'components/TeacherLevel/TeacherLevel';

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
      <div className="grid-item teacher-avatar"></div>
      <div className="grid-item teacher-name"></div>
      <div className="grid-item teacher-score"></div>
      <div className="grid-item teacher-info"></div>
      <div className="grid-item teacher-about"></div>
      <div className="grid-item teacher-level">
        <TeacherLevel $isActive level="B1 Intermediate"></TeacherLevel>
      </div>
    </StyledTeacherCard>
  );
};

export default TeacherCard;
