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
import { GET_RESELLER_INFO } from './lib/constants'

const PrivateRoute = ({children})=> {
  const {resellerInfo} = useAppStore();
  const isAuthenticated = !!resellerInfo;
  return isAuthenticated ? children : <Navigate to="/login" />;
}

const AuthRoute = ({children})=> {
  const {resellerInfo} = useAppStore();
  const isAuthenticated = !!resellerInfo;
  return isAuthenticated ? <Navigate to="/app" /> : children;
}


function App() {
  const {resellerInfo, setResellerInfo} = useAppStore();
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
  }, [resellerInfo, setResellerInfo])

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
        <Route path="/supplier-login" element={<SuppLogin />} />


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
        <Route path='/supplier' element={<Dashboard />} />
        <Route path='/supplier/products' element={<Products />} />
        <Route path='/supplier/add-product' element={<AddProduct />} />
        <Route path='/supplier/ads' element={<Ads />} />
        <Route path='/supplier/create-ad' element={<AddAd />} />
        <Route path='/supplier/bulk-upload' element={<BulkUpload />} />
        <Route path='/supplier/account' element={<Account />} />
        <Route path='/supplier/account/edit' element={<EditAccount />} />
        <Route path='/supplier/account/edit/password' element={<EditPasswordSupp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
