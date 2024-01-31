import React from 'react';
import PropTypes from 'prop-types';
import { StyledPopUp } from './PopUp.styled';
import { CgClose } from 'react-icons/cg';
import { iconSize } from 'components/Constants';

const PopUp = ({ children }) => {
  return (
    <StyledPopUp>
      <div className="modal">
        <button
          className="close-button"
          data-modal-close
          type="button"
          aria-label="Modal close button"
        >
          <CgClose size={iconSize.xl} />
        </button>
        {children}
      </div>
    </StyledPopUp>
  );
};

PopUp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PopUp;
