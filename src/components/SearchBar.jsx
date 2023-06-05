import React from 'react';

const SearchBar = ({ value, onChange, onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="input-group d-flex justify-content-center py-2"
    >
      <label htmlFor="searchInput" className="sr-only">
        Search
      </label>
      <input
        id="searchInput"
        className="form-control"
        type="text"
        value={value}
        onChange={onChange}
        style={{
          borderRadius: '1rem 0 0 1rem',
          maxWidth: '720px',
          height: '40px',
        }}
      />
      <button
        type="submit"
        className="btn btn-primary"
        aria-label="Search-button"
        disabled={!value}
        style={{
          borderRadius: '0 1rem 1rem 0',
          width: '48px',
          height: '40px',
        }}
      >
        <svg
          className="bi bi-search"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
