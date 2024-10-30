import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("token");

  return (
    <div className="min-h-screen bg-gray-100">
      
      <Header />
      <div className="flex">
        {isAuthenticated && <Sidebar />}
        <main className={`flex-1 ${isAuthenticated ? 'ml-64' : ''}`}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
