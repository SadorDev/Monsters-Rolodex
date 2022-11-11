import "./search-box.styles.css";

const SearchBox = ({className, onChangeHandler}) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder="Search Monsters"
      // This is an anonymous function
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
