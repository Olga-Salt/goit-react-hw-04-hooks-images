import React, { Component } from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { AiOutlineClose } from 'react-icons/ai';

import Searchbar from './components/searchbar/Searchbar';
import ImageGallery from './components/imageGallery/ImageGallery.jsx';
import Modal from './components/modal/Modal';
import { ModalImg, ModalBtnClose } from './components/modal/Modal.styled';
import PicturePangingView from './components/imageGallery/PicturePangingView';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  justify-items: center;
`;

class App extends Component {
  state = {
    picture: '',
    showModal: false,
    largeImageURL: '',
    tags: '',
    loading: false,
  };

  getLargePicture = (largeImageURL, tags) => {
    this.setState({ largeImageURL, tags });
  };

  handleFormSearch = picture => {
    this.setState({ picture });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setLoading = value => {
    this.setState({ loading: value });
  };

  render() {
    const { showModal, picture, largeImageURL, tags, loading } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSearch}></Searchbar>
        <ToastContainer autoClose={3000} />
        <div>
          <ImageGallery
            pictureName={picture}
            onClose={this.toggleModal}
            onFetch={this.getLargePicture}
            onLoading={this.setLoading}
          />
          {loading && <PicturePangingView />}
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <ModalImg src={largeImageURL} alt={tags} />
              <ModalBtnClose type="button" onClick={this.toggleModal}>
                <AiOutlineClose />
              </ModalBtnClose>
            </Modal>
          )}
        </div>
      </Container>
    );
  }
}

export default App;
