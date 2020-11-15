const Search = ({ handleChange }) => {
  return (
    <>
      <input
        type='search'
        placeholder='Search items...'
        onChange={handleChange}
      />
    </>
  );
};

export default Search;
