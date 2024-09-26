import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import ProtectedRoute from './components/auth/ProtectedRoute'
import Dashboard from './pages/Supplier/Dashboard'
import Products from './pages/Supplier/Products'
import Ads from './pages/Supplier/Ads'
import AddProduct from './pages/Supplier/AddProduct'
import AddAd from './pages/Supplier/AddAd'
import BulkUpload from './pages/Supplier/BulkUpload'
import Account from './pages/Supplier/Account'
import EditAccount from './pages/Supplier/EditAccount'
import EditPasswordSupp from './pages/Supplier/EditPasswordSupp'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/supplier-signup" element={<SuppSignup />} />
        <Route path="/supplier-login" element={<SuppLogin />} />


        <Route element={<ProtectedRoute />}>
          <Route path="/app" element={<MainApp />} />
          <Route path="/app/suppliers" element={
            <SuppliersPage />
          } />
          <Route path="/app/products" element={
            <ProductsPage />
          } />
          <Route path="/app/suppliers/view" element={
            <SingleSupplierPage />
          } />
          <Route path="/app/account" element={
            <ProfilePage />
          } />
          <Route path="/app/account/edit-password" element={
            <EditPassword />
          } />
        </Route>
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
