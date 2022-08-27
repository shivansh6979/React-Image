import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex-search">
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Search for images.."
        />
        <button type="submit">
          <strong>Search</strong>
        </button>
      </form>
    </div>
  );
};

export default ImageSearch;
