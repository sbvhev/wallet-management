import Receiver from "./components/Receiver";
import Sender from "./components/Sender";
import Transactions from "./components/Transactions";
import WalletBalance from "./components/WalletBalance";

export default function Home() {
  return (
    <div className="lg:h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <main className="lg:flex z-10 relative max-w-screen-2xl 2xl:mx-auto">
        <div className="lg:w-1/4 flex flex-col p-6 space-y-8 lg:h-screen">
          <WalletBalance />
        </div>
        <div className="lg:w-3/4 p-6 space-y-8">
          <div className="sm:flex justify-between">
            <Sender />
            <Receiver />
          </div>
          <Transactions />
        </div>
      </main>
    </div>
  );
}
