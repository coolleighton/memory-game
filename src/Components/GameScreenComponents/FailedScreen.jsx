function FailedScreen({startWithDog}) {
    return (
        <div className="w-2/4 p-5 mx-5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl flex flex-col items-center text-white">
            <p className="text-center font semibold" >You failed. Either press the button below to start again with dogs, or enter something else above to start again.</p>
            <button onClick={() => startWithDog()} className="text-sm shadow-lg text-white font-semibold bg-blue-900 text-center align-middle p-2 mt-5 rounded-xl hover:scale-110 duration-200">Play again with dogs</button>
        </div>
    )
}
export default FailedScreen