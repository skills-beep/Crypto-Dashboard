
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
  onSwitchToSignup: () => void;
  onBack: () => void;
}

const LoginPage = ({ onLogin, onSwitchToSignup, onBack }: LoginPageProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 glass-card">
        <div className="text-center mb-8">
          <LogIn className="h-12 w-12 text-neon-blue mx-auto mb-4" />
          <h1 className="text-2xl font-bold font-poppins neon-text">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Sign in to your crypto dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="bg-background/50"
            />
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <button
              onClick={onSwitchToSignup}
              className="text-neon-blue hover:text-neon-green transition-colors"
            >
              Sign up
            </button>
          </p>
          <button
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground transition-colors mt-2"
          >
            ← Back to Dashboard
          </button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
