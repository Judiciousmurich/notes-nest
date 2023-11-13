
const Search = ({ onSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Search notes..." onChange={(e) => onSearch(e.target.value)} />
    </div>
  );
};

export default Search;
