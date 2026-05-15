import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";

// Pages — path relatif ke file yang pasti ada
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders    = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customer"));
const Products  = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Loyalty   = lazy(() => import("./pages/Loyalty"));
const Promos    = lazy(() => import("./pages/Promos"));
const Reports   = lazy(() => import("./pages/Reports"));

// Auth Pages
const Login    = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Forgot   = lazy(() => import("./pages/auth/Forgot"));

// 404
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {/* Dashboard Routes */}
                <Route element={<MainLayout />}>
                    <Route path="/"          element={<Dashboard />} />
                    <Route path="/orders"    element={<Orders />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/products"  element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/loyalty"   element={<Loyalty />} />
                    <Route path="/promos"    element={<Promos />} />
                    <Route path="/reports"   element={<Reports />} />
                </Route>

                {/* Auth Routes */}
                <Route element={<AuthLayout />}>
                    <Route path="/auth/login"    element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/auth/forgot"   element={<Forgot />} />
                </Route>

                {/* Error Pages */}
                <Route path="/error-400" element={<NotFound code="400" title="Bad Request"    description="Permintaan tidak valid atau format salah." />} />
                <Route path="/error-401" element={<NotFound code="401" title="Unauthorized"   description="Kamu harus login untuk mengakses halaman ini." />} />
                <Route path="/error-403" element={<NotFound code="403" title="Forbidden"      description="Kamu tidak memiliki izin untuk mengakses halaman ini." />} />

                {/* 404 Catch-all */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}