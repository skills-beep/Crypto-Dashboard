
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Area, AreaChart } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { TrendingUpIcon, DollarSignIcon, BarChart3Icon, CircleDollarSignIcon } from "lucide-react";

const fetchBitcoinPrices = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"
  );
  const data = await response.json();
  
  return data.prices.slice(-30).map(([timestamp, price]: [number, number], index: number) => ({
    date: new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    price: Math.round(price),
    volume: Math.round(Math.random() * 1000000000), // Mock volume data
  }));
};

const fetchBitcoinStats = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/bitcoin"
  );
  return response.json();
};

const PortfolioCard = () => {
  const { data: priceData, isLoading: priceLoading } = useQuery({
    queryKey: ['bitcoinPrices'],
    queryFn: fetchBitcoinPrices,
    refetchInterval: 60000,
  });

  const { data: statsData, isLoading: statsLoading } = useQuery({
    queryKey: ['bitcoinStats'],
    queryFn: fetchBitcoinStats,
    refetchInterval: 60000,
  });

  if (priceLoading || statsLoading) {
    return (
      <div className="glass-card p-6 rounded-xl mb-8 animate-fade-in">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-secondary/50 rounded w-1/2"></div>
          <div className="h-[300px] bg-secondary/50 rounded"></div>
        </div>
      </div>
    );
  }

  const currentPrice = statsData?.market_data?.current_price?.usd || 0;
  const priceChange24h = statsData?.market_data?.price_change_percentage_24h || 0;
  const ath = statsData?.market_data?.ath?.usd || 0;
  const circulatingSupply = statsData?.market_data?.circulating_supply || 0;

  const metrics = [
    {
      label: "Current Price",
      value: `$${currentPrice.toLocaleString()}`,
      icon: DollarSignIcon,
      color: "text-neon-blue",
    },
    {
      label: "24h Change",
      value: `${priceChange24h >= 0 ? '+' : ''}${priceChange24h.toFixed(2)}%`,
      icon: TrendingUpIcon,
      color: priceChange24h >= 0 ? "text-success" : "text-danger",
    },
    {
      label: "All-Time High",
      value: `$${ath.toLocaleString()}`,
      icon: BarChart3Icon,
      color: "text-warning",
    },
    {
      label: "Circulating Supply",
      value: `${(circulatingSupply / 1000000).toFixed(2)}M BTC`,
      icon: CircleDollarSignIcon,
      color: "text-neon-green",
    },
  ];

  return (
    <div className="glass-card p-6 rounded-xl mb-8 animate-fade-in">
      <h2 className="text-2xl font-bold font-poppins mb-6 neon-text">
        Bitcoin Analytics
      </h2>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="bg-secondary/30 p-4 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-2">
              <metric.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground font-medium">
                {metric.label}
              </span>
            </div>
            <p className={`text-lg font-bold font-poppins ${metric.color}`}>
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* Enhanced Chart */}
      <div className="h-[240px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={priceData}>
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00D4FF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              stroke="#9CA3AF"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              contentStyle={{ 
                background: 'rgba(17, 17, 17, 0.95)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)',
              }}
              labelStyle={{ color: '#FAFAF9', fontWeight: 'bold' }}
              itemStyle={{ color: '#00D4FF' }}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#00D4FF" 
              strokeWidth={2}
              fill="url(#priceGradient)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioCard;
