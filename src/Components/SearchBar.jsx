import searchImg from "../assets/search.png";

function SearchBar() {
  return (
    <div className="flex justify-center">
      <input
        className="placeholder-white text-mg shadow-xl text-white font-semibold bg-blue-600 text-center align-middle px-5 py-2 rounded-xl"
        placeholder="Type your favorite thing here"
      ></input>
      <img
        className="w-10 h-10 bg-blue-600 p-2 ml-7 rounded-xl hover:cursor-pointer hover:scale-110 shadow-xl"
        src={searchImg}
      ></img>
    </div>
  );
}

export default SearchBar;