import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import AccommodationsPage from './pages/AccommodationsPage';
import AddAccommodationModal from './modals/AddAccommodationModal';

export default function App() {
  return (
    <>
        {/* <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <LoginPage />
          </MainLayout>
        }
      />
      <Route
        path="/home-user"
        element={
          <MainLayout>
            <AccommodationsPage />
          </MainLayout>
        }
      />
    </Routes> */}

    <AddAccommodationModal/>
    </>
  );
}