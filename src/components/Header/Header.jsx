import React from 'react';
import { StyledHeader } from './Header.styled';
import Logo from 'components/Logo/Logo';
import Auth from 'components/Auth/Auth';
import Navigation from 'components/Navigation/Navigation';
import { CgMenu } from 'react-icons/cg';
import { iconSize } from '../../constants';

import Filter from 'components/Filter/Filter';

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-wrapper">
        <Logo />
        <Navigation />
        <Auth />
        <button type="button" aria-controls="mobile-menu">
          <CgMenu size={iconSize.xl} aria-label="Mobile menu switch" />
        </button>
      </div>
      <Filter $type="theme" $title="Theme" />
    </StyledHeader>
  );
};

export default Header;
