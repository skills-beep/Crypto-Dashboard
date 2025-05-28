
const LoadingPage = () => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-neon-blue/20 rounded-full animate-spin border-t-neon-blue mx-auto mb-4"></div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-neon-green/20 rounded-full animate-spin border-t-neon-green animate-pulse"></div>
        </div>
        <h2 className="text-2xl font-bold font-poppins neon-text mb-2">
          Loading Dashboard
        </h2>
        <p className="text-muted-foreground animate-pulse">
          Fetching the latest crypto data...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
