import React from 'react';
import { StyledHeader } from './Header.styled';
import Logo from 'components/Logo/Logo';
import Auth from 'components/Auth/Auth';
import Navigation from 'components/Navigation/Navigation';
import { CgMenu } from 'react-icons/cg';
import { iconSize } from '../../constants';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
      <Auth />
      <button type="button">
        <CgMenu size={iconSize.xl} aria-label="Mobile menu switch" />
      </button>
    </StyledHeader>
  );
};

export default Header;
