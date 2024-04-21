import styled from 'styled-components';
import { mediaSize, spacing } from 'constants';

export const StyledStatisticsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  row-gap: ${spacing(10)};
  justify-items: center;
  padding: ${spacing(10)} 0;
  border-radius: 30px;
  border: 1.5px dashed ${({ theme }) => theme.primaryColor};

  .section-content-item {
    display: inline-flex;
    align-items: center;
    gap: ${spacing(4)};
  }

  .section-content-item span {
    width: 120px;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.14;
    letter-spacing: -0.02em;
    text-align: right;
  }

  .section-content-item p {
    width: 74px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: var(--primary-midnight);
  }

  @media screen and (min-width: ${mediaSize.tablet}) and (max-width: ${mediaSize.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
