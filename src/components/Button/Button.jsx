import React from 'react';
import StyledButton from './Button.styled';

const Button = ({ primary, children }) => {
	return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default Button;
