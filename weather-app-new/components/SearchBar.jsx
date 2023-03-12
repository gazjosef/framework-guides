import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <section className="border-2 flex">
      <select name="" id="" className="w-full py-1.5 pt-9 pb-3">
        <option>--Select Sport--</option>
      </select>
      <select name="" id="" className="w-full py-1.5 pt-9 pb-3">
        <option>--Select League--</option>
      </select>
      <button className="button | w-20 p-4">
        <FaSearch />
      </button>
    </section>
  );
};

export default SearchBar;
