import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  SearchBtn,
  SearchbarStyle,
  SearchForm,
  SearchFormInput,
} from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '') {
      return toast.error('Введите название картинки', {
        theme: 'colored',
      });
    }

    onSubmit(name);
    reset();
  };

  const reset = () => {
    setName('');
  };

  return (
    <SearchbarStyle>
      <SearchForm onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <BsSearch />
        </SearchBtn>

        <SearchFormInput
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          value={name}
          onChange={e => setName(e.target.value.toLocaleLowerCase())}
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyle>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
