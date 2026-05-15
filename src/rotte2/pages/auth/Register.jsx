import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Account</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F9FE] outline-none focus:border-[#4C35DE] transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F9FE] outline-none focus:border-[#4C35DE] transition-colors"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F9FE] outline-none focus:border-[#4C35DE] transition-colors"
            placeholder="Create a password"
          />
        </div>
        <button className="w-full bg-[#4C35DE] text-white py-3 rounded-xl font-bold hover:bg-[#3b27b5] transition-colors mt-4">
          Sign Up
        </button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account? <Link to="/rotte2/auth/login" className="text-[#4C35DE] font-bold hover:underline">Login</Link>
      </p>
    </div>
  );
};

export default Register;