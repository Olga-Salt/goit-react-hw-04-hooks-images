import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Searchbar from './components/searchbar/Searchbar';
import ImageGallery from './components/imageGallery/ImageGallery.jsx';
// import Button from './components/button/Button.jsx';
// import Spinner from './components/spinner/Spinner';
import Modal from './components/modal/Modal';

class App extends Component {
  state = {
    picture: '',
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  getLargePicture = (largeImageURL, tags) => {
    console.log(largeImageURL, tags);
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

  render() {
    const { showModal, picture, largeImageURL, tags } = this.state;

    return (
      // div сделать контейнером и все обернуть
      <div>
        <Searchbar onSubmit={this.handleFormSearch}></Searchbar>
        <ToastContainer autoClose={3000} />
        <div>
          <ImageGallery
            pictureName={picture}
            onClose={this.toggleModal}
            onFetch={this.getLargePicture}
          />
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <h1>{picture}</h1>
              <img src={largeImageURL} alt={tags} />
              <button type="button" onClick={this.toggleModal}>
                закрыть
              </button>
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

export default App;
