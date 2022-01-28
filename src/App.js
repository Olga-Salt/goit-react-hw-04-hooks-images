import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { AiOutlineClose } from 'react-icons/ai';

import Searchbar from './components/searchbar/Searchbar';
import ImageGallery from './components/imageGallery/ImageGallery.jsx';
import Modal from './components/modal/Modal';
import { ModalImg, ModalBtnClose } from './components/modal/Modal.styled';
import PicturePangingView from './components/imageGallery/PicturePangingView';
import { Container } from './App.styled';

function App() {
  const [picture, setPicture] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);

  const getLargePicture = (largeImageURL, tags) => {
    setLargeImageUrl(largeImageURL);
    setTags(tags);
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <Container>
      <Searchbar onSubmit={setPicture}></Searchbar>
      <ToastContainer autoClose={3000} />
      <div>
        <ImageGallery
          pictureName={picture}
          onClose={toggleModal}
          onFetch={getLargePicture}
          onLoading={setLoading}
        />
        {loading && <PicturePangingView />}
        {showModal && (
          <Modal onClose={toggleModal}>
            <ModalImg src={largeImageUrl} alt={tags} />
            <ModalBtnClose type="button" onClick={toggleModal}>
              <AiOutlineClose />
            </ModalBtnClose>
          </Modal>
        )}
      </div>
    </Container>
  );
}

export default App;
