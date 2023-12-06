import searchImg from "../assets/search.png";

function SearchBar({ searchFunction }) {
  const inputValue = () => {
    const value = document.querySelector("#searchData").value;
    return value;
  };

  return (
    <div className="flex justify-center">
      <input
        className="placeholder-white text-mg shadow-xl text-white font-semibold bg-blue-600 text-center align-middle px-5 py-2 rounded-xl"
        placeholder="Type your favorite thing here"
        id="searchData"
      ></input>
      <img
        className="w-10 h-10 bg-blue-600 p-2 ml-7 rounded-xl hover:cursor-pointer hover:scale-110 shadow-xl duration-200"
        src={searchImg}
        onClick={() => searchFunction(inputValue())}
       /* onKeyDown={(e) => {
          if (e.key === "Enter") searchFunction(inputValue());
        }}</div> */
      ></img>
    </div>
  );
}

export default SearchBar;
