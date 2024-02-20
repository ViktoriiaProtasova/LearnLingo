import styled from 'styled-components';
import { color, spacing } from 'constants';

export const StyledBooking = styled.form`
  display: flex;
  flex-direction: column;

  .image-wrapper {
    display: flex;
    gap: ${spacing(4)};
    margin-bottom: ${spacing(10)};
  }

  .image-thumb {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    overflow: hidden;
  }

  .teacher-title {
    margin-bottom: ${spacing(1)};
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    color: ${color.lightTextColor};
  }

  .teacher-title span {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  .radio-title {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    margin-bottom: ${spacing(5)};
  }

  .radio-wrapper {
    display: flex;
    align-items: center;
    gap: ${spacing(2)};
  }

  .radio-wrapper:not(:last-child) {
    margin-bottom: ${spacing(4)};
  }
`;
