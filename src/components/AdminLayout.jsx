import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className={`flex flex-col flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <AdminNavbar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        
        <main className="flex-grow p-4 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
