import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { LandingPage } from './pages/LandingPage';
import { ProfilePage } from './pages/ProfilePage';
import { RightsPage } from './pages/RightsPage';
import { StepsPage } from './pages/StepsPage';
import { SimulatorPage } from './pages/SimulatorPage';
import { ProtectedRoute } from './components/ProtectedRoute';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/koraci" element={<StepsPage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route 
            path="/prava" 
            element={
              <ProtectedRoute>
                <RightsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/simulator" 
            element={
              <ProtectedRoute>
                <SimulatorPage />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}