import React from 'react';
import PropTypes from 'prop-types';
import { StyledTeacherLevel } from './TeacherLevel.styled';

const TeacherLevel = ({ level, $isActive }) => {
  return (
    <StyledTeacherLevel $isActive={$isActive}>{`#${level}`}</StyledTeacherLevel>
  );
};

TeacherLevel.propTypes = {
  level: PropTypes.string.isRequired,
  $isActive: PropTypes.bool.isRequired,
};

export default TeacherLevel;
