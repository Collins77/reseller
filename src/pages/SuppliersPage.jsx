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
import { GET_ALL_CATEGORIES_ROUTE, GET_ALL_SUPPLIER_ROUTES } from "@/lib/constants";

const SuppliersPage = () => {
  // State to hold suppliers, categories, search, and filters
  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Fetch suppliers and categories
  useEffect(() => {
    const fetchSuppliers = async () => {
      const res = await apiClient.get(GET_ALL_SUPPLIER_ROUTES, {}, { withCredentials: true }); // Replace with your API
      const data = await res.data.suppliers;
      console.log(data);
      setSuppliers(data);
      setFilteredSuppliers(data); // Initially, display all suppliers
    };

    const fetchCategories = async () => {
      const res = await apiClient.get(GET_ALL_CATEGORIES_ROUTE, {}, { withCredentials: true });; // Replace with your API
      const data = await res.data;
      setCategories(data);
    };

    fetchSuppliers();
    fetchCategories();
  }, []);

  // Filter suppliers based on search, type, and category
  useEffect(() => {
    let updatedSuppliers = suppliers;

    // Filter by search
    if (search) {
      updatedSuppliers = updatedSuppliers.filter((supplier) =>
        supplier.companyName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by type
    if (typeFilter) {
      updatedSuppliers = updatedSuppliers.filter(
        (supplier) => supplier.companyType === typeFilter
      );
    }

    // Filter by category
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
          <a href={`/suppliers/${supplier.id}`} key={supplier.id} className="border p-5 rounded-sm">
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
                <h1>{supplier.productsCount}</h1>
                <p>Products</p>
              </div>
              <div className="flex flex-col items-center justify-center border-r">
                <h1>{supplier.adsCount}</h1>
                <p>Ads</p>
              </div>
              <div className="flex flex-col items-center justify-center border-r">
                <h1>{supplier.dollarExchangeRate}</h1>
                <p>Dollar Rate</p>
              </div>
              <div className="flex flex-col items-center justify-center border-r">
                <h1>{supplier.companyType}</h1>
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
