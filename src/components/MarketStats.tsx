
import { ArrowUpIcon, ArrowDownIcon, TrendingUpIcon, DollarSignIcon, PieChartIcon, BitcoinIcon } from "lucide-react";

const MarketStats = () => {
  const stats = [
    {
      title: "Total Market Cap",
      value: "$2.1T",
      change: "+2.4%",
      isPositive: true,
      icon: PieChartIcon,
      description: "24h change",
      valueColor: "text-neon-blue",
    },
    {
      title: "24h Volume",
      value: "$84.2B",
      change: "+5.1%",
      isPositive: true,
      icon: DollarSignIcon,
      description: "Trading volume",
      valueColor: "text-neon-green",
    },
    {
      title: "BTC Dominance",
      value: "42.1%",
      change: "-0.8%",
      isPositive: false,
      icon: BitcoinIcon,
      description: "Market share",
      valueColor: "text-warning",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
      {stats.map((stat, index) => (
        <div
          key={stat.title}
          className="glass-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 cursor-pointer group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-green/20 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground font-inter">
                  {stat.title}
                </h3>
                <p className="text-xs text-muted-foreground/70">{stat.description}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className={`text-3xl font-bold font-poppins ${stat.valueColor} group-hover:scale-105 transition-transform duration-300`}>
              {stat.value}
            </p>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-medium flex items-center gap-1 px-2 py-1 rounded-full ${
                  stat.isPositive
                    ? "text-success bg-success/10"
                    : "text-danger bg-danger/10"
                }`}
              >
                {stat.isPositive ? (
                  <ArrowUpIcon className="w-3 h-3" />
                ) : (
                  <ArrowDownIcon className="w-3 h-3" />
                )}
                {stat.change}
              </span>
              <span className="text-xs text-muted-foreground">24h</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketStats;
