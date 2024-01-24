import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.$registration ? '14px 39px;' : '16px 88px;')};

	font-size: ${props => (props.$registration ? '16px;' : '18px;')};
  font-weight: 700;
  line-height: ${props => (props.$registration ? 1.25 : 1.56)};

  border-radius: 12px;
  border: transparent;
  background: ${props =>
    props.$registration
      ? 'var(--primary-text-color)'
      : 'var(--primary-yellow)'};
  
	transition: background var(--transition-duration) var(--transition-timing-function), color var(--transition-duration) var(--transition-timing-function);

${props => {
  switch (props.$size) {
    case 'small':
      return `
        padding: 16px 48px;
      `;
    case 'large':
      return `
        width: 100%;
      `;
    default:
      return `
        color: var(--primary-text-color);
      `;
  }
}}

  color: ${props =>
    props.$registration
      ? 'var(--secondary-text-color)'
      : 'var(--primary-text-color)'};
		
		&:hover, &:focus { background: ${props =>
      props.$registration
        ? 'var(--secondary-text-color)'
        : 'var(--secondary-yellow)'};
        
				border: ${props => props.$registration && '1px solid var(--primary-text-color)'};
        
				color: ${props => props.$registration && 'var(--primary-text-color)'}
`;
