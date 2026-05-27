import React from 'react';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Forgot Password</h2>
      <p className="text-center text-sm text-gray-500 mb-6">
        Enter your email and we'll send you a link to reset your password.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F8F9FE] outline-none focus:border-[#7B1C1C] transition-colors"
            placeholder="Enter your email"
          />
        </div>
        <button className="w-full bg-[#7B1C1C] text-white py-3 rounded-xl font-bold hover:bg-[#5A1313] transition-colors mt-4 shadow-lg shadow-red-200">
          Send Reset Link
        </button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-6">
        Remember your password? <Link to="/rotte2/auth/login" className="text-[#7B1C1C] font-bold hover:underline">Back to Login</Link>
      </p>
    </div>
  );
};

export default Forgot;
