import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, ModalContent } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay className="overlay" onClick={this.handleackdropClick}>
        <ModalContent className="modal">{this.props.children}</ModalContent>
      </Overlay>,
      modalRoot,
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};
