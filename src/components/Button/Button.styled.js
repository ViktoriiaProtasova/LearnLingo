import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: flex;
  padding: ${props => (props.$registration ? '14px 39px;' : '16px 88px;')};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: transparent;

  background: ${props =>
    props.$registration
      ? 'var(--primary-text-color)'
      : 'var(--primary-yellow)'};
		
  font-size: ${props => (props.$registration ? '16px;' : '18px;')};
  font-weight: 700;
  line-height: ${props => (props.$registration ? 1.25 : 1.56)};

  color: ${props =>
    props.$registration
      ? 'var(--secondary-text-color)'
      : 'var(--primary-text-color)'};
			
	transition: background var(--transition-duration) var(--transition-timing-function), border var(--transition-duration) var(--transition-timing-function), color var(--transition-duration) var(--transition-timing-function);
			
		&:hover { background: ${props =>
      props.$registration
        ? 'var(--secondary-text-color)'
        : 'var(--secondary-yellow)'};
				border: ${props => props.$registration && '1px solid var(--primary-text-color)'};
				color: ${props => props.$registration && 'var(--primary-text-color)'}
`;

export const StyledBtnSmall = styled(StyledBtn)`
  padding: 16px 48px;
`;

export const StyledBtnLarge = styled(StyledBtn)`
  width: 100%;
  padding: 16px 48px;
`;
