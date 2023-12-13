function messageScreen({message, startWithDog}) {
    return (
        <div className="container p-3 mt-5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl flex flex-col items-center text-white">
            <p className="text-center font semibold" >{message.messageText}</p>
            <button onClick={() => startWithDog()} className="text-sm shadow-lg text-white font-semibold bg-blue-900 text-center align-middle p-2 mt-5 rounded-xl hover:scale-110 duration-200">{message.buttonText}</button>
        </div>
    )
}
export default messageScreen