import React from 'react';
import { StyledMobileMenu } from './MobileMenu.styled';
import Auth from 'components/Auth/Auth';
import Navigation from 'components/Navigation/Navigation';
import Filter from 'components/Filter/Filter';

const MobileMenu = () => {
  return (
    <StyledMobileMenu id="mobile-menu">
      <Filter $type="theme" $title="Theme" />
      <Navigation className="mobile" />
      <Auth className="mobile" />
    </StyledMobileMenu>
  );
};

export default MobileMenu;
