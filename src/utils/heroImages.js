import yellow from '../images/block-1.jpg';
import yellow2x from '../images/block-1@2x.jpg';
import yellow3x from '../images/block-1@3x.jpg';

import green from '../images/block-2.jpg';
import green2x from '../images/block-2@2x.jpg';
import green3x from '../images/block-2@3x.jpg';

import blue from '../images/block-3.jpg';
import blue2x from '../images/block-3@2x.jpg';
import blue3x from '../images/block-3@3x.jpg';

import red from '../images/block-4.jpg';
import red2x from '../images/block-4@2x.jpg';
import red3x from '../images/block-4@3x.jpg';

import salmon from '../images/block-5.jpg';
import salmon2x from '../images/block-5@2x.jpg';
import salmon3x from '../images/block-5@3x.jpg';

export const getHero = color => {
  switch (color) {
    case 'yellow':
      return `${yellow}`;
    case 'green':
      return `${green}`;
    case 'blue':
      return `${blue}`;
    case 'red':
      return `${red}`;
    case 'salmon':
      return `${salmon}`;
    default:
      return `${yellow}`;
  }
};

export const getHero2x = color => {
  switch (color) {
    case 'yellow':
      return `${yellow2x}`;
    case 'green':
      return `${green2x}`;
    case 'blue':
      return `${blue2x}`;
    case 'red':
      return `${red2x}`;
    case 'salmon':
      return `${salmon2x}`;
    default:
      return `${yellow2x}`;
  }
};

export const getHero3x = color => {
  switch (color) {
    case 'yellow':
      return `${yellow3x}`;
    case 'green':
      return `${green3x}`;
    case 'blue':
      return `${blue3x}`;
    case 'red':
      return `${red3x}`;
    case 'salmon':
      return `${salmon3x}`;
    default:
      return `${yellow3x}`;
  }
};
