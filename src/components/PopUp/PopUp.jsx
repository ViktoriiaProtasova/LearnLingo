import React from 'react';
import PropTypes from 'prop-types';
import { StyledPopUp } from './PopUp.styled';
import sprite from '../../images/sprite.svg';

const PopUp = ({ title, text, children }) => {
  return (
    <StyledPopUp>
      <div className="modal">
        <button
          className="modal-close-btn"
          data-modal-close
          type="button"
          aria-label="Modal close button"
        >
          <svg className="modal-close-btn-icon">
            <use href={sprite + '#icon-close'}></use>
          </svg>
        </button>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </div>
    </StyledPopUp>
  );
};

PopUp.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PopUp;
