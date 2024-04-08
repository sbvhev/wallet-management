const Transactions = () => {
  return (
    <div className="">
      <div className="sm:flex gap-1 items-center justify-between">
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6 rotate-45"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            ></path>
          </svg>
          <p className="text-xl font-bold">Transactions</p>
        </div>
        <div className="flex gap-6 items-center justify-between mt-4 sm:mt-0">
          <div className="flex gap-1 items-center">
            <p className="font-thin">Blocks:</p>
            <p>123</p>
          </div>
          <div className="flex gap-1 items-center">
            <p className="font-thin">Confirmations:</p>
            <p>94</p>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto lg:h-[80vh] h-auto lg:pb-[50vh]">
        <div className="mt-4 grid grid-cols-4 gap-2 text-sm text-gray-400 px-6">
          <p>VALUE</p>
          <p>DATE</p>
          <p>TYPE</p>
          <p>TX</p>
        </div>
        <div className="mt-2 flex flex-col gap-2 text-sm px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              0.028<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 15</p>
            <p className="text-primary font-medium">Receiving</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              0.18<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-sm bg-gray-600/10 rounded-md p-4">
            <p className="">
              2<span className="font-thin mx-1 text-xs">ETH</span>
            </p>
            <p className="text-gray-400">Thursday, October 10</p>
            <p className="font-medium">Was sent</p>
            <p className="text-gray-400">0xC60....B4198</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
