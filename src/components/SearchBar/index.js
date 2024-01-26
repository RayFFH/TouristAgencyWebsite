// SearchBar.js

import React from 'react';
import './index.scss'; // Create this file for styling

const SearchBar = ({ onClose }) => {
  return (
    <div className="search-bar">
      {/* Your search bar content goes here */}
      <input type="text" placeholder="Search..." />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SearchBar;
