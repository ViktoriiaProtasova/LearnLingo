import React from 'react';
import { StyledHero } from './Hero.styled';
import Button from 'components/Button/Button';
import HeroImg from 'components/HeroImg/HeroImg';

const Hero = () => {
  return (
    <StyledHero>
      <div className="hero-content">
        <h1 className="hero-title">
          Unlock your potential with the best <span>language</span> tutors
        </h1>
        <p className="hero-text">
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <Button>Get started</Button>
      </div>
      <HeroImg />
    </StyledHero>
  );
};

export default Hero;
