import styled from 'styled-components';

export const StyledPopUp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.9);
  transition: opacity var(--transition-duration-long)
    var(--transition-timing-function);

  div {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    transform-origin: top left;

    width: 600px;
    padding: 64px;
    border-radius: 30px;
    max-height: 70vh;

    background: var(--secondary-text-color);
    overflow: auto;
  }

  button {
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background-color: transparent;
  }

  svg {
    color: var(--primary-text-color);
  }
`;
