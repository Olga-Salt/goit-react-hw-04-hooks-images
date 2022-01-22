import React from 'react';
import PropTypes from 'prop-types';
import { BtnLoadMore } from './Button.styled';

function Button({ onClick }) {
  return (
    <BtnLoadMore type="button" onClick={onClick}>
      Load more
    </BtnLoadMore>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
