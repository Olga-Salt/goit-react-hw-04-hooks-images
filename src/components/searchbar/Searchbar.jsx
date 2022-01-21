import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    // const currentName = e.currentTarget.elements.name.value;
    // console.log(e.currentTarget.elements.name.value)

    const { name } = this.state;

    if (name.trim() === '') {
      return toast.error('Wow so easy !', {
        theme: 'colored',
      });
    }

    this.props.onSubmit(name);

    this.reset();
  };

  handleChange = e => {
    // console.log(e.target.value)

    const { name, value } = e.target;
    this.setState({ [name]: value.toLowerCase() });
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;

    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            type="text"
            name="name"
            autoComplete="off"
            autoFocus
            value={name}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
