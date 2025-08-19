import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Golden diagonal background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-golden transform -skew-x-12 -translate-x-20"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-golden transform skew-x-12 translate-x-32"></div>
      
      {/* Top notification bar */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-golden-dark text-golden-foreground px-6 py-2 rounded-b-lg text-sm">
        Enter your information here
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Login</h1>
            <p className="text-gray-600">Please enter your Login and your Password</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Username or Email"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-transparent"
                required
              />
            </div>

            {/* Password field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-transparent"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
              <div className="text-right mt-1">
                <Link to="/forgot-password" className="text-sm text-golden-dark hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-golden hover:bg-golden-dark text-golden-foreground font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Login
            </button>

            {/* Google login */}
            <button
              type="button"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Or Sign-in with Google</span>
            </button>

            {/* Register link */}
            <div className="text-center">
              <span className="text-gray-600">Not a member yet? </span>
              <Link to="/register" className="text-golden-dark hover:underline font-medium">
                Register!
              </Link>
            </div>
          </form>

          {/* User type buttons */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <User className="w-4 h-4" />
              <span>Author login</span>
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <User className="w-4 h-4" />
              <span>Reviewer login</span>
            </button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <User className="w-4 h-4" />
              <span>Editor login</span>
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <User className="w-4 h-4" />
              <span>Publisher login</span>
            </button>
          </div>

          {/* Privacy policy text */}
          <div className="mt-8 text-xs text-gray-600 text-center">
            <p className="mb-2">
              By registering an account on Editorial Manager, you acknowledge that your personal information will 
              be processed in accordance with PLOS's Privacy Policy and agree to PLOS's Terms of Use.
            </p>
            <p>
              PLOS requires an ORCID ID for all corresponding authors and encourages all users to have one. To 
              register for an ORCID ID and/or link your ID to your Editorial Manager account, click the green iD 
              button. See this quick video tutorial for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
