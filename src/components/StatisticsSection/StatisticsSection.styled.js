import styled from 'styled-components';

export const StyledStatisticsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
  grid-auto-rows: 1fr;
  row-gap: 40px;
  justify-items: center;
  max-width: 1312px;
  padding: 40px;
  border-radius: 30px;
  border: 1.5px dashed var(--primary-yellow);

  .section-content-item {
    display: inline-flex;
    align-items: center;
    gap: 16px;
  }

  .section-content-item span {
    font-size: 28px;
    font-weight: 500;
    line-height: 1.14;
    letter-spacing: -0.02em;
  }

  .section-content-item p {
    max-width: 74px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: var(--primary-midnight);
  }
`;
