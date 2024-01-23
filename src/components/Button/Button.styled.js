import styled from '@emotion/styled';

const StyledButton = styled.button`
  display: flex;
  padding: 16px 88px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: transparent;

  background: ${props =>
    props.primary ? 'var(--primary-yellow)' : 'var(--secondary-yellow)'};

  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  color: 'var(--secondary-text-color)';
`;

export default StyledButton;
