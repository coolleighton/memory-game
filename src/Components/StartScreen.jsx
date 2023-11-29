function startScreen({startWithDog}) {
    return (
        <div className="w-2/4 p-5 mx-5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl flex flex-col items-center text-white">
            <p className="text-center font semibold" >To start 'Your Favourite Memory Game' enter your favourite thing into the search bar above and press enter. We recommend entering one word search terms but almost anything works. If you can't decide, use the button below to play the game with dogs.</p>
            <button onClick={() => startWithDog()} className="text-sm shadow-lg text-white font-semibold bg-blue-900 text-center align-middle p-2 mt-5 rounded-xl hover:scale-110 duration-200">Play the meoney game with dogs</button>
        </div>
    )
}
export default startScreen