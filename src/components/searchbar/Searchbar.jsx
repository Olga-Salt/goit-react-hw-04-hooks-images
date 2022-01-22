import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  SearchBtn,
  SearchbarStyle,
  SearchForm,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name } = this.state;

    if (name.trim() === '') {
      return toast.error('Введите название картинки', {
        theme: 'colored',
      });
    }

    this.props.onSubmit(name);

    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value.toLowerCase() });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;

    return (
      <SearchbarStyle>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <BsSearch />
          </SearchBtn>

          <SearchFormInput
            type="text"
            name="name"
            autoComplete="off"
            autoFocus
            value={name}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarStyle>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
