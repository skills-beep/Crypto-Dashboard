
import { Moon, Sun, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/contexts/ThemeContext";

interface UserHeaderProps {
  onShowLogin: () => void;
  isLoggedIn: boolean;
  userName?: string;
}

const UserHeader = ({ onShowLogin, isLoggedIn, userName }: UserHeaderProps) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-between mb-8 glass-card p-4 rounded-lg">
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <Avatar className="h-12 w-12 border-2 border-neon-blue/50">
              <AvatarImage src="/api/placeholder/50/50" alt="User" />
              <AvatarFallback className="bg-gradient-to-br from-neon-blue to-neon-green text-background font-semibold">
                {userName ? userName.charAt(0).toUpperCase() : 'B'}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold font-poppins">
                Welcome back, {userName || 'Bishal'}!
              </h2>
              <p className="text-muted-foreground text-sm">Ready to trade today?</p>
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-xl font-bold font-poppins">Crypto Dashboard</h2>
            <p className="text-muted-foreground text-sm">Track your favorite cryptocurrencies</p>
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-3">
        {isLoggedIn && (
          <div className="text-right hidden sm:block">
            <p className="text-sm text-muted-foreground">Portfolio Value</p>
            <p className="text-lg font-bold text-success">$12,847.32</p>
          </div>
        )}
        
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="border-neon-blue/30 hover:bg-neon-blue/10 transition-all duration-300"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        
        {!isLoggedIn && (
          <Button
            onClick={onShowLogin}
            className="bg-neon-blue hover:bg-neon-blue/80 text-background"
          >
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default UserHeader;
