import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  position: relative;
`;

export const ModalImg = styled.img`
  max-height: 90vh;
  max-width: 90vw;
`;

export const ModalBtnClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 34px;
  height: 34px;
  border-color: transparent;
  background-color: transparent;
  > svg {
    width: 30px;
    height: 30px;
    fill: #ff7a00;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      fill: #ff7a00;
      transform: scale(1.3);
    }
  }
`;
