
import { useState, useEffect } from "react";
import UserHeader from "@/components/UserHeader";
import MarketStats from "@/components/MarketStats";
import CryptoChart from "@/components/CryptoChart";
import PortfolioCard from "@/components/PortfolioCard";
import CryptoList from "@/components/CryptoList";
import DeveloperSection from "@/components/DeveloperSection";
import LoadingPage from "@/components/LoadingPage";
import LoginPage from "@/components/auth/LoginPage";
import SignupPage from "@/components/auth/SignupPage";

type AuthMode = 'dashboard' | 'login' | 'signup';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [authMode, setAuthMode] = useState<AuthMode>('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (email: string, password: string) => {
    // Simulate login process
    console.log('Login with:', email, password);
    setIsLoggedIn(true);
    setUserName(email.split('@')[0]);
    setAuthMode('dashboard');
  };

  const handleSignup = (email: string, password: string, name: string) => {
    // Simulate signup process
    console.log('Signup with:', email, password, name);
    setIsLoggedIn(true);
    setUserName(name);
    setAuthMode('dashboard');
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (authMode === 'login') {
    return (
      <LoginPage
        onLogin={handleLogin}
        onSwitchToSignup={() => setAuthMode('signup')}
        onBack={() => setAuthMode('dashboard')}
      />
    );
  }

  if (authMode === 'signup') {
    return (
      <SignupPage
        onSignup={handleSignup}
        onSwitchToLogin={() => setAuthMode('login')}
        onBack={() => setAuthMode('dashboard')}
      />
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <UserHeader 
          onShowLogin={() => setAuthMode('login')}
          isLoggedIn={isLoggedIn}
          userName={userName}
        />
        
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
          
          <DeveloperSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
