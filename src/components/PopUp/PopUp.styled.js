import styled from 'styled-components';
import { color, transition, spacing } from 'constants';

export const StyledPopUp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  overflow: auto;
  background-color: ${color.bgColor};
  transition: opacity ${transition.duration} ${transition.timingFunction};

  .modal {
    position: relative;
    max-width: 600px;
    padding: ${spacing(16)} ${spacing(8)};
    margin: ${spacing(16)} ${spacing(4)};
    border-radius: 30px;
    background: ${color.secondaryTextColor};

    @media screen and (min-width: 752px) {
      padding: ${spacing(16)};
      margin: ${spacing(16)} ${spacing(4)};
    }
  }

  .close-button {
    position: absolute;
    top: ${spacing(5)};
    right: ${spacing(5)};
    border: none;
    outline: none;
    background-color: transparent;
  }

  .close-button > svg {
    color: ${color.primaryTextColor};
    transition: color ${transition.duration} ${transition.timingFunction};
  }

  .close-button:is(:hover, :focus) > svg {
    color: ${color.primaryYellow};
  }
`;
