import React from 'react';
import PropTypes from 'prop-types';
import { StyledTeacherLevel } from './TeacherLevel.styled';

const TeacherLevel = ({ $isActive, level }) => {
  return (
    <StyledTeacherLevel $isActive={$isActive}>{`#${level}`}</StyledTeacherLevel>
  );
};

TeacherLevel.propTypes = {};

export default TeacherLevel;
