
import { ArrowUpIcon, ArrowDownIcon, TrendingUpIcon, StarIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchCryptoData = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const CryptoList = () => {
  const [watchlist, setWatchlist] = useState<string[]>(['bitcoin', 'ethereum']);
  
  const { data: cryptos, isLoading } = useQuery({
    queryKey: ['cryptos'],
    queryFn: fetchCryptoData,
    refetchInterval: 30000,
  });

  const toggleWatchlist = (id: string) => {
    setWatchlist(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  if (isLoading) {
    return (
      <div className="glass-card rounded-xl p-6 animate-pulse">
        <div className="space-y-4">
          <div className="h-6 bg-secondary/50 rounded w-1/3"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/50 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-secondary/50 rounded w-20"></div>
                  <div className="h-3 bg-secondary/50 rounded w-12"></div>
                </div>
              </div>
              <div className="h-4 bg-secondary/50 rounded w-16"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-poppins neon-text">
          Top Cryptocurrencies
        </h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <TrendingUpIcon className="w-4 h-4" />
          <span>Live Prices</span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 pb-3 mb-4 border-b border-white/10 text-sm text-muted-foreground font-medium">
            <div className="col-span-1">#</div>
            <div className="col-span-3">Name</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">1h %</div>
            <div className="col-span-2">24h %</div>
            <div className="col-span-2">Volume</div>
          </div>

          {/* Crypto List */}
          <div className="space-y-2">
            {cryptos?.map((crypto: any, index: number) => (
              <div
                key={crypto.id}
                className="grid grid-cols-12 gap-4 py-4 rounded-lg hover:bg-secondary/20 transition-all duration-300 cursor-pointer group"
              >
                <div className="col-span-1 flex items-center">
                  <span className="text-muted-foreground font-medium">
                    {index + 1}
                  </span>
                </div>
                
                <div className="col-span-3 flex items-center gap-3">
                  <button
                    onClick={() => toggleWatchlist(crypto.id)}
                    className="p-1 rounded hover:bg-neon-blue/20 transition-colors duration-200"
                  >
                    <StarIcon 
                      className={`w-4 h-4 ${
                        watchlist.includes(crypto.id) 
                          ? 'text-warning fill-warning' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  </button>
                  <img 
                    src={crypto.image} 
                    alt={crypto.name} 
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-semibold font-poppins group-hover:text-neon-blue transition-colors duration-300">
                      {crypto.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {crypto.symbol.toUpperCase()}
                    </p>
                  </div>
                </div>
                
                <div className="col-span-2 flex items-center">
                  <span className="font-bold font-poppins text-lg">
                    ${crypto.current_price.toLocaleString()}
                  </span>
                </div>
                
                <div className="col-span-2 flex items-center">
                  <span
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
                      crypto.price_change_percentage_1h_in_currency >= 0 
                        ? "text-success bg-success/10" 
                        : "text-danger bg-danger/10"
                    }`}
                  >
                    {crypto.price_change_percentage_1h_in_currency >= 0 ? (
                      <ArrowUpIcon className="w-3 h-3" />
                    ) : (
                      <ArrowDownIcon className="w-3 h-3" />
                    )}
                    {Math.abs(crypto.price_change_percentage_1h_in_currency || 0).toFixed(2)}%
                  </span>
                </div>
                
                <div className="col-span-2 flex items-center">
                  <span
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
                      crypto.price_change_percentage_24h >= 0 
                        ? "text-success bg-success/10" 
                        : "text-danger bg-danger/10"
                    }`}
                  >
                    {crypto.price_change_percentage_24h >= 0 ? (
                      <ArrowUpIcon className="w-3 h-3" />
                    ) : (
                      <ArrowDownIcon className="w-3 h-3" />
                    )}
                    {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                  </span>
                </div>
                
                <div className="col-span-2 flex items-center">
                  <span className="font-medium">
                    ${(crypto.total_volume / 1e9).toFixed(2)}B
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoList;
