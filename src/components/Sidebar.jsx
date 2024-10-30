import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  const menuItems = [
    {
      title: 'Alojamientos',
      path: '/home-user',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: 'Reservaciones',
      path: '/reservations',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-6">Panel de Control</h2>
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg ${
                location.pathname === item.path
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="absolute bottom-0 w-full p-6">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 px-4 py-2.5 w-full text-gray-700 hover:bg-gray-50 rounded-lg"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;