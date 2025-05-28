
import UserHeader from "@/components/UserHeader";
import MarketStats from "@/components/MarketStats";
import CryptoChart from "@/components/CryptoChart";
import PortfolioCard from "@/components/PortfolioCard";
import CryptoList from "@/components/CryptoList";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <UserHeader />
        
        <div className="space-y-8">
          <MarketStats />
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
              <CryptoChart />
            </div>
            <div className="xl:col-span-1">
              <PortfolioCard />
            </div>
          </div>
          
          <CryptoList />
        </div>
      </div>
    </div>
  );
};

export default Index;
