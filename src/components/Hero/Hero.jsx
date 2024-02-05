import React from 'react';
import { StyledHero } from './Hero.styled';
import Button from 'components/Button/Button';

const Hero = () => {
  return (
    <StyledHero>
      <h1 className="hero-title">
        Unlock your potential with the best <span>language</span> tutors
      </h1>
      <p className="hero-text">
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <Button>Get started</Button>
    </StyledHero>
  );
};

export default Hero;
