import React from 'react';
import { StyledMobileMenu } from './MobileMenu.styled';
import Auth from 'components/Auth/Auth';
import Navigation from 'components/Navigation/Navigation';

const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      <Navigation className="mobile" />
      <Auth className="mobile" />
    </StyledMobileMenu>
  );
};

export default MobileMenu;
