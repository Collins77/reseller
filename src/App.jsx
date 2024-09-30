import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PartnersPage from './pages/PartnersPage'
import PrivacyPage from './pages/PrivacyPage'
import FaqPage from './pages/FaqPage'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'
import SuppSignup from './pages/Auth/Supplier/SuppSignup'
import SuppLogin from './pages/Auth/Supplier/SuppLogin'
import MainApp from './pages/MainApp'
import SuppliersPage from './pages/SuppliersPage'
import ProductsPage from './pages/ProductsPage'
import SingleSupplierPage from './pages/SingleSupplierPage'
import ProfilePage from './pages/ProfilePage'
import EditPassword from './pages/Auth/EditPassword'
// import ProtectedRoute from './components/auth/ProtectedRoute'
import Dashboard from './pages/Supplier/Dashboard'
import Products from './pages/Supplier/Products'
import Ads from './pages/Supplier/Ads'
import AddProduct from './pages/Supplier/AddProduct'
import AddAd from './pages/Supplier/AddAd'
import BulkUpload from './pages/Supplier/BulkUpload'
import Account from './pages/Supplier/Account'
import EditAccount from './pages/Supplier/EditAccount'
import EditPasswordSupp from './pages/Supplier/EditPasswordSupp'
import { useAppStore } from './redux/store'
import { useEffect, useState } from 'react'
import apiClient from './lib/api-client'
import { GET_ADMIN_INFO, GET_RESELLER_INFO, GET_SUPPLIER_INFO } from './lib/constants'
import BrandResults from './pages/BrandResults'
import CategoryResults from './pages/CategoryResults'
import SearchResults from './pages/SearchResults'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminProducts from './pages/Admin/AdminProducts'
import AdminResellers from './pages/Admin/AdminResellers'
import AdminSuppliers from './pages/Admin/AdminSuppliers'
import AdminAds from './pages/Admin/AdminAds'
import Admins from './pages/Admin/Admins'
import AdminLogin from './pages/Auth/AdminLogin'
import AddAdmin from './pages/Admin/AddAdmin'
import AdminAddReseller from './pages/Admin/AdminAddReseller'
import AdminAddSupplier from './pages/Admin/AdminAddSupplier'

const PrivateRoute = ({children})=> {
  const {resellerInfo} = useAppStore();
  const isAuthenticated = !!resellerInfo;
  return isAuthenticated ? children : <Navigate to="/login" />;
}
const AdminRoute = ({children})=> {
  const {adminInfo} = useAppStore();
  const isAuthenticated = !!adminInfo;
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
}

const SupplierRoute = ({children})=> {
  const {supplierInfo} = useAppStore();
  const isAuthenticated = !!supplierInfo;
  return isAuthenticated ? children : <Navigate to="/supplier-login" />;
}

const AuthRoute = ({children})=> {
  const {resellerInfo} = useAppStore();
  const isAuthenticated = !!resellerInfo;
  return isAuthenticated ? <Navigate to="/app" /> : children;
}

const SupplierAuthRoute = ({children})=> {
  const {supplierInfo} = useAppStore();
  const isAuthenticated = !!supplierInfo;
  return isAuthenticated ? <Navigate to="/supplier" /> : children;
}

const AdminAuthRoute = ({children})=> {
  const {adminInfo} = useAppStore();
  const isAuthenticated = !!adminInfo;
  return isAuthenticated ? <Navigate to="/admin" /> : children;
}


function App() {
  const {resellerInfo, setResellerInfo} = useAppStore();
  const {supplierInfo, setSupplierInfo} = useAppStore();
  const {adminInfo, setAdminInfo} = useAppStore();
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const getResellerData = async () => {
      try {
        const response = await apiClient.get(GET_RESELLER_INFO, {withCredentials: true,});
        if(response.status === 200 && response.data.id) {
          setResellerInfo(response.data);
        } else {
          setResellerInfo(undefined);
        }
        console.log({response});
      } catch (err) {
        console.error(err);
        setResellerInfo(undefined);
      } finally {
        setLoading(false);
      }
    }
    if(!resellerInfo) {
      getResellerData()
    } else {
      setLoading(false)
    }
    const getSupplierData = async () => {
      try {
        const response = await apiClient.get(GET_SUPPLIER_INFO, {withCredentials: true,});
        if(response.status === 200 && response.data.id) {
          setSupplierInfo(response.data);
        } else {
          setSupplierInfo(undefined);
        }
        console.log({response});
      } catch (err) {
        console.error(err);
        setSupplierInfo(undefined);
      } finally {
        setLoading(false);
      }
    }
    if(!supplierInfo) {
      getSupplierData()
    } else {
      setLoading(false)
    }
    const getAdminData = async () => {
      try {
        const response = await apiClient.get(GET_ADMIN_INFO, {withCredentials: true,});
        if(response.status === 200 && response.data.id) {
          setAdminInfo(response.data);
        } else {
          setAdminInfo(undefined);
        }
        console.log({response});
      } catch (err) {
        console.error(err);
        setAdminInfo(undefined);
      } finally {
        setLoading(false);
      }
    }
    if(!adminInfo) {
      getAdminData()
    } else {
      setLoading(false)
    }
  }, [resellerInfo, setResellerInfo, supplierInfo, setSupplierInfo, adminInfo, setAdminInfo])

  if(loading) {
    return <div>Loading....</div>
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate to="/login" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={
          <AuthRoute>
            <Login />
          </AuthRoute>
        } />
        <Route path="/supplier-signup" element={<SuppSignup />} />
        <Route path="/supplier-login" element={
          <SupplierAuthRoute>
            <SuppLogin />
          </SupplierAuthRoute>
        } />


        {/* <Route element={<PrivateRoute />}> */}
          <Route path="/app" element={
            <PrivateRoute> 
              <MainApp />
            </PrivateRoute>
          } />
          <Route path="/app/suppliers" element={
            <PrivateRoute>
              <SuppliersPage />
            </PrivateRoute>
          } />
          <Route path="/app/products" element={
            <PrivateRoute>
              <ProductsPage />
            </PrivateRoute>
          } />
          <Route path="/app/suppliers/view/:id" element={
            <PrivateRoute>
              <SingleSupplierPage />
            </PrivateRoute>
          } />
          <Route path="/app/brands/view/:slug" element={
            <PrivateRoute>
              <BrandResults />
            </PrivateRoute>
          } />
          <Route path="/app/categories/view/:slug" element={
            <PrivateRoute>
              <CategoryResults />
            </PrivateRoute>
          } />
          <Route path="/app/search" element={
            <PrivateRoute>
              <SearchResults />
            </PrivateRoute>
          } />
          <Route path="/app/account" element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          } />
          <Route path="/app/account/edit-password" element={
            <PrivateRoute>
              <EditPassword />
            </PrivateRoute>
          } />

        {/* </Route> */}
        <Route path='/supplier' element={
          <SupplierRoute>
            <Dashboard />
          </SupplierRoute>
        } />
        <Route path='/supplier/products' element={
          <SupplierRoute>
            <Products />
          </SupplierRoute>
        } />
        <Route path='/supplier/add-product' element={
          <SupplierRoute>
            <AddProduct />
          </SupplierRoute>
        } />
        <Route path='/supplier/ads' element={
          <SupplierRoute>
            <Ads />
          </SupplierRoute>
        } />
        <Route path='/supplier/create-ad' element={
          <SupplierRoute>
            <AddAd />
          </SupplierRoute>
        } />
        <Route path='/supplier/bulk-upload' element={
          <SupplierRoute>
            <BulkUpload />
          </SupplierRoute>
        } />
        <Route path='/supplier/account' element={
          <SupplierRoute>
            <Account />
          </SupplierRoute>
        } />
        <Route path='/supplier/account/edit' element={
          <SupplierRoute>
            <EditAccount />
          </SupplierRoute>
        } />
        <Route path='/supplier/account/edit/password' element={
          <SupplierRoute>
            <EditPasswordSupp />
          </SupplierRoute>
        } />

        <Route path='/admin/login' element={
          <AdminAuthRoute>
            <AdminLogin />
          </AdminAuthRoute>
        } />
        <Route path='/admin' element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        } />
        <Route path='/admin/products' element={
          <AdminRoute>
            <AdminProducts />
          </AdminRoute>
        } />
        <Route path='/admin/resellers' element={
          <AdminRoute>
            <AdminResellers />
          </AdminRoute>
        } />
        <Route path='/admin/suppliers' element={
          <AdminRoute>
            <AdminSuppliers />
          </AdminRoute>
        } />
        <Route path='/admin/ads' element={
          <AdminRoute>
            <AdminAds />
          </AdminRoute>
        } />
        <Route path='/admin/admins' element={
          <AdminRoute>
            <Admins />
          </AdminRoute>
        } />
        <Route path='/admin/add-admin' element={
          <AdminRoute>
            <AddAdmin />
          </AdminRoute>
        } />
        <Route path='/admin/create-reseller' element={
          <AdminRoute>
            <AdminAddReseller />
          </AdminRoute>
        } />
        <Route path='/admin/create-supplier' element={
          <AdminRoute>
            <AdminAddSupplier />
          </AdminRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
