import styled from 'styled-components';

export const StyledBooking = styled.form`
  display: flex;
  flex-direction: column;

  .image-wrapper {
    display: flex;
    gap: 14px;
    margin-bottom: 40px;
  }

  .image-thumb {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  .teacher-title {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    color: var(--light-text-color);
  }

  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.33;
    margin-bottom: 21px;
  }

  .radio-group,
  .input-group {
    margin-bottom: 40px;
  }

  .radio-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .radio-wrapper:not(:last-child) {
    margin-bottom: 17px;
  }
`;

export const StyledTitle = styled.div`
  .booking-title {
    font-size: 40px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.8px;
    margin-bottom: 20px;
  }

  .booking-text {
    font-size: 16px;
    font-style: normal;
    line-height: 1.38;
    margin-bottom: 20px;
  }
`;
