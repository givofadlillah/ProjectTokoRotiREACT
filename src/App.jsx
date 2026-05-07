import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/custom.css';
import './App.css';

// Layouts
import MainLayout from './rotte/layouts/MainLayout';
import AuthLayout from './rotte/layouts/AuthLayout';

// Pages
import Dashboard from './rotte/pages/dashboard';
import Orders from './rotte/pages/orders';
import Customers from './rotte/pages/customer';
import Loyalty from './rotte/pages/loyalty';
import Promos from './rotte/pages/promos';
import Reports from './rotte/pages/reports';
import Login from './rotte/pages/auth/login';
import Register from './rotte/pages/auth/register';
import Forgot from './rotte/pages/auth/forgot';
import NotFound from './rotte/pages/notfound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Dashboard Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="loyalty" element={<Loyalty />} />
          <Route path="promos" element={<Promos />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;