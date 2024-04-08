const Receiver = () => {
  return (
    <div className="sm:w-1/2 p-6 space-y-8">
      <div className="flex gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-8 w-8 rotate-45"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 13l-5 5m0 0l-5-5m5 5V6"
          ></path>
        </svg>
        <p className="text-xl font-bold">Receive</p>
      </div>
      <div className="space-y-1">
        <p className=" font-light text-gray-400">Address:</p>
        <div className="flex items-center gap-2">
          <button className="bg-sky-500 rounded-md p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
          </button>
          <div className="flex-1 flex items-center">
            <p className="">0xdD2....0Bf44C0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receiver;
