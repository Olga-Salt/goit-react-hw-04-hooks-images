import React from 'react';
import styled from 'styled-components';
import errorImage from './error.jpg';

const ErrorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 80vh;
`;

const ErrorImg = styled.img`
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

function PictureErrorView() {
  return (
    <ErrorWrap role="alert">
      <ErrorImg src={errorImage} alt="nothing finded" />
    </ErrorWrap>
  );
}

export default PictureErrorView;
