import React from 'react';
import { StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <p>&#169; 2024</p>
      <p>
        <span>Coded by </span>
        <a
          href="https://github.com/ViktoriiaProtasova"
          target="_blank"
          rel="noopener noreferrer"
        >
          Viktoriia Protasova
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
