import { useState } from 'react';
import Sidebar from './SupplierSidebar';
import Navbar from './SupplierNavbar';

const SupplierLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className={`flex flex-col flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Navbar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        
        <main className="flex-grow p-4 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SupplierLayout;
