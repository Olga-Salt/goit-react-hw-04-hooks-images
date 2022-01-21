import React from 'react';
import PropTypes from 'prop-types';
import errorImage from './error.jpg';

function PictureErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="400" alt="sadcat" />
      <p>{message}</p>
    </div>
  );
}

export default PictureErrorView;

PictureErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
