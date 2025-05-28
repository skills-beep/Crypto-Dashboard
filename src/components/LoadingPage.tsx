
const LoadingPage = () => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Main spinning ring */}
          <div className="w-24 h-24 border-4 border-purple-200/20 rounded-full animate-spin border-t-purple-500 mx-auto"></div>
          
          {/* Inner spinning ring */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 border-4 border-blue-200/20 rounded-full animate-spin border-t-blue-400 animate-reverse-spin"></div>
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full animate-pulse"></div>
          
          {/* Floating particles */}
          <div className="absolute -top-2 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute top-0 -right-4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce animation-delay-500"></div>
          <div className="absolute bottom-0 -left-4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce animation-delay-1500"></div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold font-poppins bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Loading Dashboard
          </h2>
          
          <p className="text-lg text-muted-foreground animate-pulse">
            Fetching the latest crypto data...
          </p>
          
          {/* Progress bar */}
          <div className="w-64 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
