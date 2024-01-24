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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 372px;
    padding: 64px;
    border-radius: 30px;
    border: 1px solid #121417;
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
