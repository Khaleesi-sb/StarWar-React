import React from 'react';
import { FaTimes } from 'react-icons/fa';

const SearchBar = ({ searchTerm, handleInputChange, handleClearClick }) => {
  return (
    <div style={{ position: 'relative', display: "flex", alignItems: "center", width: "200px", marginBottom: "20px" }}>
      <input style={{
        fontSize: "14px",
        paddingRight: "20px", // Adjust right padding to make space for the icon
        width: "100%",
        border: "2px solid #87CEEB",
        padding: "8px"
      }}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <FaTimes
          onClick={handleClearClick}
          style={{
            position: 'absolute',
            top: '50%',
            right: '5px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            color: "#87CEEB",
            height: "15px"
          }}
        />
      )}
    </div>
  );
};

export default SearchBar;
