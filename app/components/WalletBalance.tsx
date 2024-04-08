const WalletBalance = () => {
  return (
    <div className="flex-1 flex flex-col p-4 space-y-8 justify-between">
      <div className="flex lg:grid justify-between items-center lg:space-y-8">
        <div className="flex items-center">
          <p className="-rotate-90">Balance</p>
          <div>
            <p className="font-thin">ETH</p>
            <div className="flex items-center gap-1">
              <p className="font-bold text-2xl">0.32</p>
            </div>
            <p className="text-primary">140.21 $</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="-rotate-90">ERC271</p>
          <div>
            <p className="font-thin">Total Sent</p>
            <div className="flex items-center gap-1">
              <p className="font-bold text-2xl">2.23 ETH</p>
            </div>
            <p className="text-primary">2310.21 $</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletBalance;
