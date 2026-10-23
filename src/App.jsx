import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import AnatomiOrgan from './components/AnatomiOrgan/AnatomiOrgan';
import AugmentedDetail from './components/AugmentedDetail/AugmentedDetail';
import Landing from './pages/Landing/Landing';
import Kuis from './pages/Kuis/Kuis';
import KuisMenu from './pages/Kuis/KuisMenu';
import Dashboard from './pages/Dashboard/Dashboard';
import ModuleStudy from './pages/ModuleStudy/ModuleStudy';
import AR from './pages/Augmented/Augmented';
import MarkerAR from './pages/Augmented/MarkerAR';
import ArScanner from './pages/ArScanner/ArScanner';
import Xscanner from './pages/ArScanner/Xscanner';

import AIChatPage from './pages/AIChatPage/AIChatPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/anatomi" element={<Menu />} />
      <Route path="/anatomi/:id" element={<AnatomiOrgan />} />

      <Route path="/kuis" element={<KuisMenu />} />
      <Route path="/kuis/:organId" element={<Kuis />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/modul" element={<ModuleStudy />} />
      <Route path="/modul/:moduleId" element={<ModuleStudy />} />

      <Route path="/augmented" element={<AR />} />
      {/* <Route path="/augmented/tubuh-pria" element={<AR />} /> */}
      <Route path="/augmented/:id" element={<AugmentedDetail />} />

      
      <Route path="/markerar" element={<MarkerAR />} />
      <Route path="/arscanner" element={<ArScanner />} />
      <Route path="/xscanner" element={<Xscanner />} />

      <Route path="/ai-chat" element={<AIChatPage />} />
    </Routes>
  );
}

export default App;