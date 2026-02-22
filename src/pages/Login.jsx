import { SignIn } from '@clerk/clerk-react';
import { Heart } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="card text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-100 rounded-full">
              <Heart className="w-12 h-12 text-primary-600" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gradient mb-4">
            Welcome to Niyantrana
          </h1>

          <p className="text-secondary-600 mb-8">
            Your personal health companion for proactive wellness management
          </p>

          <SignIn />

          <div className="mt-8 pt-6 border-t border-secondary-200">
            <p className="text-xs text-secondary-500">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;