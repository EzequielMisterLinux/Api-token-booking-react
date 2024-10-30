// App.jsx
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AccommodationsPage from './pages/AccommodationsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home-user" element={<AccommodationsPage />} />
    </Routes>
  );
}