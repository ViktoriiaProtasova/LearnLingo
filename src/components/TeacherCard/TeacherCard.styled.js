import styled from 'styled-components';
import { color, spacing } from 'constants';

export const StyledTeacherCard = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: repeat(4, auto);
  column-gap: ${spacing(12)};
  padding: ${spacing(6)};

  .grid-row:not(:last-child) {
    margin-bottom: ${spacing(8)};
  }

  .teacher-avatar {
    grid-column: 1 / 2;
    grid-row: 1 / 5;
  }

  .teacher-avatar .thumb {
    position: relative;
    width: 120px;
    height: 120px;
    padding: ${spacing(3)};
    border-radius: 50%;
    border: 3px solid ${color.lightYellow};
  }

  .teacher-avatar .online {
    position: absolute;
    top: 19px;
    right: 23px;
    width: 12px;
    height: 12px;
    border: 4px solid ${color.secondaryTextColor};
    color: ${color.accentColor};
  }

  .teacher-about {
    position: relative;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .heart {
    position: absolute;
    top: 0;
    right: 0;
  }

  .teacher-name-wrapper p {
    margin-bottom: ${spacing(2)};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${color.lightTextColor};
  }

  .teacher-name {
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    color: ${color.primaryTextColor};
  }

  .teacher-score {
    display: flex;
    align-items: center;
    margin-right: ${spacing(22.5)};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${color.primaryTextColor};
  }

  .star {
    color: ${color.primaryYellow};
  }

  .teacher-score div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${spacing(2)};
    height: 24px;
  }

  .teacher-score div:not(:last-child)::after {
    content: '|';
    margin: 0 ${spacing(4)};
    color: ${color.primaryMiddle};
  }

  .price span {
    color: ${color.accentColor};
  }

  .teacher-info {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
  }

  .teacher-info a {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  .teacher-info-general {
    margin-bottom: ${spacing(4)};
  }

  .teacher-info span {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${color.lightTextColor};
  }

  .teacher-info p:not(:last-child) {
    margin-bottom: ${spacing(2)};
  }

  .speaks {
    text-decoration: underline;
  }

  .teacher-level {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    display: flex;
    gap: ${spacing(2)};
  }
`;
