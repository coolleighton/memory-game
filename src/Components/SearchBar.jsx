import searchImg from "../assets/search.png";

function SearchBar({ searchFunction }) {
  const inputValue = () => {
    const value = document.querySelector("#searchData").value;
    return value;
  };

  return (
    <div className="flex justify-center">
      <input
        className="placeholder-white ml-3 text-xs shadow-xl text-white font-semibold bg-blue-600 text-center align-middle rounded-xl px-2 outline-white"
        placeholder="Type your favorite thing here"
        id="searchData"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchFunction(inputValue());
          }
        }}
      ></input>
      <img
        className="w-8 h-8 bg-blue-600 p-2 mx-3 rounded-xl hover:cursor-pointer hover:scale-110 shadow-xl duration-200"
        src={searchImg}
        onClick={() => searchFunction(inputValue())}
      ></img>
    </div>
  );
}

export default SearchBar;
