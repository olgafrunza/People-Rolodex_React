import React from "react";

const SearchBox = (prop) => {
  const { placeholder, className, onChangeHandler } = prop;
  return (
    <input
      type="search"
      placeholder={placeholder}
      className={className}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
