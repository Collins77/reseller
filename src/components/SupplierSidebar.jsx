// import React from 'react'

const SupplierSidebar = ({ isOpen }) => {
    return (
        <aside
          className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50 w-64`}
        >
          <nav>
            <ul className="flex flex-col p-4">
              <li className="py-2"><a href="#" className="hover:bg-gray-700 block p-2 rounded">Dashboard</a></li>
              <li className="py-2"><a href="#" className="hover:bg-gray-700 block p-2 rounded">Orders</a></li>
              <li className="py-2"><a href="#" className="hover:bg-gray-700 block p-2 rounded">Products</a></li>
              <li className="py-2"><a href="#" className="hover:bg-gray-700 block p-2 rounded">Suppliers</a></li>
              <li className="py-2"><a href="#" className="hover:bg-gray-700 block p-2 rounded">Settings</a></li>
            </ul>
          </nav>
        </aside>
      );
}

export default SupplierSidebar