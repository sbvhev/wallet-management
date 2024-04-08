const Sender = () => {
  return (
    <div className="sm:w-1/2 p-6 space-y-6 overflow-hidden bg-zinc-900 rounded-lg">
      <div className="flex gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-8 w-8 rotate-45"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
        <p className="text-xl font-bold">Send</p>
      </div>
      <div className="flex items-center gap-2 bg-sky-500 rounded-xl p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-6 w-6 text-white"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
        <input
          type="text"
          placeholder="Search, public address (0x), or ENS"
          aria-label="Search by public address or ENS"
          className="flex-1 bg-transparent outline-none placeholder:text-gray-100"
        />
      </div>
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <input
            type="number"
            min="0"
            placeholder="Amount"
            className="flex-1 bg-transparent outline-none pr-2 w-full"
          />
          <div className="flex gap-3 items-center text-xs">
            <div className="flex items-center gap-1">
              <p className="p-2 cursor-pointer rounded-md hover:bg-primary hover:border-primary">
                1/4
              </p>
              <p className="p-2 cursor-pointer rounded-md hover:bg-primary hover:border-primary">
                Half
              </p>
              <p className="p-2 cursor-pointer rounded-md hover:bg-primary hover:border-primary">
                All
              </p>
            </div>

            <p className="text-base">ETH</p>
          </div>
        </div>
        <hr className=" border-primary rounded-xl" />
        <div className="flex items-center justify-between">
          <p>200</p>
          <p>USD</p>
        </div>
      </div>
      <div className="flex items-center justify-around">
        <button className="p-3 px-12 flex text-center justify-center bg-sky-400 hover:-translate-y-2 transition-all rounded-xl">
          Sent
        </button>
      </div>
    </div>
  );
};

export default Sender;
