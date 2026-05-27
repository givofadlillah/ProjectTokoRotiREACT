import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F9FE] outline-none focus:border-[#7B1C1C] transition-colors"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <Link to="/rotte2/auth/forgot" className="text-xs text-[#7B1C1C] hover:underline font-medium">Forgot password?</Link>
          </div>
          <input 
            type="password" 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F9FE] outline-none focus:border-[#7B1C1C] transition-colors"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full bg-[#7B1C1C] text-white py-3 rounded-xl font-bold hover:bg-[#5A1313] transition-colors mt-4 shadow-lg shadow-red-200">
          Sign In
        </button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-6">
        Don't have an account? <Link to="/rotte2/auth/register" className="text-[#7B1C1C] font-bold hover:underline">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
