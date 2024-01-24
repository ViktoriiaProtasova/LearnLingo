import styled from 'styled-components';

export const StyledPopUp = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.9);
  transition: opacity var(--transition-duration-long) var(--transition-timing-function),
    visibility var(--transition-duration-long) var(--transition-timing-function);
}
`;
