import React from 'react';
import { StyledStatisticsSection } from './StatisticsSection.styled';

const StatisticsSection = () => {
  return (
    <StyledStatisticsSection>
      <h2 className="visually-hidden">Statistics</h2>
      <div className="section-content-item">
        <span>32,000 +</span>
        <p>Experienced tutors</p>
      </div>
      <div className="section-content-item">
        <span>300,000 +</span>
        <p>5-star tutor reviews</p>
      </div>
      <div className="section-content-item">
        <span>120 +</span>
        <p>Subjects taught</p>
      </div>
      <div className="section-content-item">
        <span>200 +</span>
        <p>Tutor nationalities</p>
      </div>
    </StyledStatisticsSection>
  );
};

export default StatisticsSection;
