
import { useState } from 'react';
import TradingViewWidget from 'react-tradingview-widget';
import { ChevronDownIcon } from 'lucide-react';

const CryptoChart = () => {
  const [selectedCoin, setSelectedCoin] = useState('BTCUSDT');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const coins = [
    { symbol: 'BTCUSDT', name: 'Bitcoin', icon: '₿' },
    { symbol: 'ETHUSDT', name: 'Ethereum', icon: 'Ξ' },
    { symbol: 'ADAUSDT', name: 'Cardano', icon: '₳' },
    { symbol: 'SOLUSDT', name: 'Solana', icon: '◎' },
    { symbol: 'DOTUSDT', name: 'Polkadot', icon: '●' },
  ];

  const selectedCoinData = coins.find(coin => coin.symbol === selectedCoin);

  return (
    <div className="glass-card p-6 rounded-xl mb-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-poppins neon-text">Price Chart</h2>
        
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-neon-blue/30 hover:bg-secondary/70 transition-all duration-300"
          >
            <span className="text-neon-blue text-lg">{selectedCoinData?.icon}</span>
            <span className="font-medium">{selectedCoinData?.name}</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 right-0 w-48 glass-card rounded-lg border border-white/10 overflow-hidden z-50">
              {coins.map((coin) => (
                <button
                  key={coin.symbol}
                  onClick={() => {
                    setSelectedCoin(coin.symbol);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-neon-blue/10 transition-colors duration-200"
                >
                  <span className="text-neon-blue text-lg">{coin.icon}</span>
                  <span className="font-medium">{coin.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="h-[400px] w-full rounded-lg overflow-hidden glow-border">
        <TradingViewWidget
          symbol={`BINANCE:${selectedCoin}`}
          theme="dark"
          locale="en"
          autosize
          hide_side_toolbar={false}
          allow_symbol_change={false}
          interval="D"
          toolbar_bg="#0A0A0B"
          enable_publishing={false}
          hide_top_toolbar={false}
          save_image={false}
          container_id="tradingview_chart"
          style="1"
        />
      </div>
    </div>
  );
};

export default CryptoChart;
