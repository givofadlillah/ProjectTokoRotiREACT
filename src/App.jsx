import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/custom.css';
import './App.css';

// ==========================================
// IMPORTS UNTUK ROTTE (VERSI 1 LAMA)
// ==========================================
import MainLayout from './rotte/layouts/MainLayout';
import AuthLayout from './rotte/layouts/AuthLayout';
import Dashboard from './rotte/pages/Dashboard';
import Orders from './rotte/pages/Orders';
import Customers from './rotte/pages/Customers';
import Products from './rotte/pages/Products';
import ProductDetail from './rotte/pages/ProductDetail';
import Loyalty from './rotte/pages/Loyalty';
import Promos from './rotte/pages/Promos';
import Reports from './rotte/pages/Reports';
import ComponentsPage from './rotte/pages/Components';
import Login from './rotte/pages/auth/Login';
import Register from './rotte/pages/auth/Register';
import Forgot from './rotte/pages/auth/Forgot';

// ==========================================
// IMPORTS UNTUK ROTTE 2 (VERSI BARU)
// Menggunakan alias (contoh: MainLayout2) agar tidak bentrok
// ==========================================
import MainLayout2 from './rotte2/layouts/MainLayout';
import AuthLayout2 from './rotte2/layouts/AuthLayout';
import Dashboard2 from './rotte2/pages/Dashboard';
import Orders2 from './rotte2/pages/Orders';
import Customers2 from './rotte2/pages/Customers';
import Loyalty2 from './rotte2/pages/Loyalty';
import Promos2 from './rotte2/pages/Promos';
import Reports2 from './rotte2/pages/Reports';
import Login2 from './rotte2/pages/auth/Login';
import Register2 from './rotte2/pages/auth/Register';
import Forgot2 from './rotte2/pages/auth/Forgot';

import NotFound from './rotte/pages/NotFound';

function App() {
  return (
    <Routes>
      {/* ===================================== */}
      {/* ROUTES ROTTE (VERSI 1 - LAMA)         */}
      {/* ===================================== */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="customers" element={<Customers />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="loyalty" element={<Loyalty />} />
        <Route path="promos" element={<Promos />} />
        <Route path="reports" element={<Reports />} />
        <Route path="components" element={<ComponentsPage />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<Forgot />} />
      </Route>

      {/* ===================================== */}
      {/* ROUTES ROTTE 2 (VERSI 2 - BARU)       */}
      {/* ===================================== */}
      <Route path="/rotte2" element={<MainLayout2 />}>
        {/* Index route untuk /rotte2 sekarang mengarah ke Dashboard2 */}
        <Route index element={<Dashboard2 />} /> 
        
        <Route path="orders" element={<Orders2 />} />
        <Route path="customers" element={<Customers2 />} />
        <Route path="loyalty" element={<Loyalty2 />} />
        <Route path="promos" element={<Promos2 />} />
        <Route path="reports" element={<Reports2 />} />
      </Route>

      <Route path="/rotte2/auth" element={<AuthLayout2 />}>
        <Route path="login" element={<Login2 />} />
        <Route path="register" element={<Register2 />} />
        <Route path="forgot" element={<Forgot2 />} />
      </Route>

      {/* Error Pages */}
      <Route path="/error-400" element={<NotFound code="400" title="Bad Request"    description="Permintaan tidak valid atau format salah." />} />
      <Route path="/error-401" element={<NotFound code="401" title="Unauthorized"   description="Kamu harus login untuk mengakses halaman ini." />} />
      <Route path="/error-403" element={<NotFound code="403" title="Forbidden"      description="Kamu tidak memiliki izin untuk mengakses halaman ini." />} />

      {/* ===================================== */}
      {/* 404 Route                             */}
      {/* ===================================== */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;