import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import UserLogin from '../api/LoginServices';

const LoginPage = () => {
  const [login, setLogin] = useState(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async () => {
    const response = await UserLogin(email, pass);
    setLogin(response);
    if (response?.token) {
      sessionStorage.setItem("token", response.token);
    }
  };

  const isLogin = sessionStorage.getItem("token");

  if (isLogin) {
    return <Navigate to="/home-user" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">Iniciar Sesión</h2>
          <p className="text-gray-600 text-sm">Ingresa tus credenciales para acceder al sistema</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correo Electrónico
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                className="pl-10 w-full py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="correo@ejemplo.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="password"
                className="pl-10 w-full py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="flex justify-end mt-1">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              id="remember"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Mantener sesión iniciada
            </label>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-sky-800 text-white py-2 px-4 rounded-md hover:bg-sky-800/75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Iniciar Sesión
          </button>
        </div>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            ¿Necesitas ayuda?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Contacta soporte
            </a>
          </p>
        </div>

        <div className="mt-4 text-center text-xs text-gray-500">
          Este es un sistema seguro. Tus datos están protegidos.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;