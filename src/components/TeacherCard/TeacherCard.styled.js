import styled from 'styled-components';

export const StyledTeacherCard = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: repeat(4, 100px);
  /* gap: 32px 48px; */
  column-gap: 48px;
  padding: 24px;

  .grid-row:not(:last-child) {
    margin-bottom: 32px;
  }

  .teacher-avatar {
    grid-column: 1 / 2;
    grid-row: 1 / 5;
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
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--light-text-color);
  }

  .teacher-name {
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    color: var(--primary-text-color);
  }

  .teacher-score {
    display: flex;
    align-items: center;
    margin-right: 90px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--primary-text-color);
  }

  .star {
    color: var(--primary-yellow);
  }

  .teacher-score div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 24px;
  }

  .teacher-score div:not(:last-child)::after {
    content: '';
    margin: 0 16px;
    width: 1px;
    height: 16px;
    background-color: var(--primary-middle);
  }

  .price span {
    color: var(--accent-color);
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
    margin-bottom: 16px;
  }

  .teacher-info span {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--light-text-color);
  }

  .teacher-info p:not(:last-child) {
    margin-bottom: 8px;
  }

  .speaks {
    text-decoration: underline;
  }

  .teacher-level {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    display: flex;
    gap: 8px;
  }
`;
