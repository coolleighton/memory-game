import searchImg from "../assets/search.png";

function SearchBar({ searchFunction }) {
  const inputValue = () => {
    const value = document.querySelector("#searchData").value;
    return value;
  };

  return (
    <div className="flex justify-center container mx-auto">
      <input
        className="min-[360px]:m-3 placeholder-white mr-2 text-xs shadow-xl text-white font-semibold bg-blue-600 text-center align-middle rounded-xl outline-white min-[360px]:text-base"
        placeholder="Search here"
        id="searchData"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchFunction(inputValue());
          }
        }}
      ></input>
      <img
        className="w-8 h-8 bg-blue-600 p-2 min-[360px]:m-3  rounded-xl hover:cursor-pointer hover:scale-110 shadow-xl duration-200 min-[360px]:w-10 min-[360px]:h-10"
        src={searchImg}
        onClick={() => searchFunction(inputValue())}
      ></img>
    </div>
  );
}

export default SearchBar;
