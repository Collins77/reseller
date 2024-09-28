import { useEffect, useState } from "react";
import AppNavbar from "@/components/AppNavbar";
import backgroundImage from "../assets/pexels-pixabay-262353.jpg";
import logo from "../assets/ResellerSprint icon.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { IoLocation, IoLogoGooglePlaystore } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import Footer from "@/components/Footer";
import { GrAppleAppStore } from "react-icons/gr";
import apiClient from "@/lib/api-client";
import { GET_ALL_ADS_BY_SUPPLIER_ROUTE, GET_ALL_CATEGORIES_ROUTE, GET_ALL_PRODUCTS_BY_SUPPLIER_ROUTE, GET_ALL_SUPPLIER_ROUTES } from "@/lib/constants";

const SuppliersPage = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);
  const [productsBySupplier, setProductsBySupplier] = useState({});
  const [adsBySupplier, setAdsBySupplier] = useState({});
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    const fetchSuppliers = async () => {
      const res = await apiClient.get(GET_ALL_SUPPLIER_ROUTES, {}, { withCredentials: true });
      const data = res.data.suppliers;
      setSuppliers(data);
      setFilteredSuppliers(data); // Initially, display all suppliers
      // Fetch products and ads for each supplier
      data.forEach((supplier) => {
        fetchSupplierProducts(supplier._id);
        fetchSupplierAds(supplier._id);
      });
    };

    const fetchCategories = async () => {
      const res = await apiClient.get(GET_ALL_CATEGORIES_ROUTE, {}, { withCredentials: true });
      const data = res.data;
      setCategories(data);
    };

    fetchSuppliers();
    fetchCategories();
  }, []);

  // Fetch products by supplier ID
  const fetchSupplierProducts = async (supplierId) => {
    try {
      const res = await apiClient.get(`${GET_ALL_PRODUCTS_BY_SUPPLIER_ROUTE}/${supplierId}`);
      const data = res.data.products;
      setProductsBySupplier((prev) => ({
        ...prev,
        [supplierId]: data, // Map supplier ID to their products
      }));
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  // Fetch ads by supplier ID
  const fetchSupplierAds = async (supplierId) => {
    try {
      const res = await apiClient.get(`${GET_ALL_ADS_BY_SUPPLIER_ROUTE}/${supplierId}`);
      const data = res.data.ads;
      setAdsBySupplier((prev) => ({
        ...prev,
        [supplierId]: data, // Map supplier ID to their ads
      }));
    } catch (error) {
      console.error("Error fetching ads", error);
    }
  };

  // Filter suppliers based on search, type, and category
  useEffect(() => {
    let updatedSuppliers = suppliers;

    if (search) {
      updatedSuppliers = updatedSuppliers.filter((supplier) =>
        supplier.companyName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (typeFilter) {
      updatedSuppliers = updatedSuppliers.filter(
        (supplier) => supplier.companyType === typeFilter
      );
    }

    if (categoryFilter) {
      updatedSuppliers = updatedSuppliers.filter(
        (supplier) =>
          supplier.categories && supplier.categories.includes(categoryFilter)
      );
    }

    setFilteredSuppliers(updatedSuppliers);
  }, [search, typeFilter, categoryFilter, suppliers]);

  return (
    <div>
      <AppNavbar />
      <div
        className="h-[120px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/70 h-full w-full flex items-center justify-center flex-col gap-4">
          <h1 className="text-4xl text-orange-500">Suppliers</h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="mt-5 mb-7 px-[20px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/app">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage href="/suppliers">Suppliers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Search and Filters */}
      <div className="w-[500px] px-[40px] mb-8">
        <div className="relative">
          <input
            className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="px-[40px] grid grid-cols-2 gap-3 mb-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="typeFilter">Filter by type</label>
          <select
            id="typeFilter"
            className="border rounded-md p-3"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="supplier">Supplier</option>
            <option value="manufacturer">Manufacturer</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="categoryFilter">Filter by category</label>
          <select
            id="categoryFilter"
            className="border rounded-md p-3"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Supplier List */}
      <div className="grid grid-cols-2 gap-3 px-[40px] mb-5">
        {filteredSuppliers.map((supplier) => (
          <a href={`/suppliers/${supplier._id}`} key={supplier.id} className="border p-5 rounded-sm">
            <div className="flex items-center gap-2">
              <div className="w-[80px] h-[80px] bg-gray-300 rounded-full flex items-center justify-center">
                <img src={logo} alt="" className="h-[60px] w-[60px]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1">{supplier.companyName}</h1>
                <div className="flex gap-1 items-center mb-2 text-gray-500">
                  <IoLocation color="orange" />
                  {supplier.address}
                </div>
                <div className="flex gap-1 items-center mb-2 text-gray-500">
                  <FaPhone color="green" />
                  {supplier.phoneNumber}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center justify-center border-r">
              <h1 className="font-bold">{productsBySupplier[supplier._id]?.length || 0}</h1>
                <p>Products</p>
              </div>
              <div className="flex flex-col items-center justify-center border-r">
              <h1 className="font-bold">{adsBySupplier[supplier._id]?.length || 0}</h1>
                <p>Ads</p>
              </div>
              <div className="flex flex-col items-center justify-center border-r">
                <h1 className="font-bold">{supplier.dollarExchangeRate}</h1>
                <p>Dollar Rate</p>
              </div>
              <div className="flex flex-col items-center justify-center border-r">
                <h1 className="font-bold">{supplier.companyType}</h1>
                <p>Type</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-orange-400 h-[200px] py-[20px]">
        <h1 className="text-center font-bold text-2xl mb-2 text-white">
          Access our services from your mobile device.
        </h1>
        <p className="text-center text-white mb-5">Mobile App Available</p>
        <div className="flex w-full justify-center items-center gap-3">
          <a href="/" className="flex gap-1 items-center bg-black px-3 py-1 text-white rounded-md">
            <IoLogoGooglePlaystore className="text-4xl" />
            <div>
              <p>GET IT ON</p>
              <h1 className="text-2xl font-bold">Google Play</h1>
            </div>
          </a>
          <a href="/" className="flex gap-1 items-center bg-black px-3 py-1 text-white rounded-md">
            <GrAppleAppStore className="text-4xl" />
            <div>
              <p>GET IT ON</p>
              <h1 className="text-2xl font-bold">APP Store</h1>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuppliersPage;
