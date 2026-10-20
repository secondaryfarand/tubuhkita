import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import SidebarAugmented from '../SidebarMenu/SidebarMenu';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import { AUGMENTED_OBJECT_LIST } from '../../data/augmentedData'; 
import styles from '../AnatomiOrgan/AnatomiOrgan.module.css'; 

export default function AugmentedDetail({ onGoToDashboard }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Cari data objek AR yang sedang aktif berdasarkan ID URL
  const activeItem = AUGMENTED_OBJECT_LIST.find((item) => item.id === id) || AUGMENTED_OBJECT_LIST[0];

  const handleSelectItem = (selectedId) => {
    navigate(`/augmented/${selectedId}`);
  };

  return (
    <div className={styles.container}>
      <Navbar onNavigateDashboard={onGoToDashboard} />
      
      {/* <button className={styles.backButton} onClick={() => navigate('/augmented')}> */}
      <button className={styles.backButton} onClick={() => navigate('/anatomi')}>
        ← Kembali ke Menu AR
      </button>

      <div className={styles.mainLayout}>
        {/* <SidebarAugmented 
          augmentedList={AUGMENTED_OBJECT_LIST} 
          activeItem={activeItem} 
          onSelectItem={handleSelectItem} 
        /> */}

        {/* Viewer Model-Viewer Native untuk AR */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <h2 style={{ marginBottom: '1rem', color: '#f8fafc' }}>{activeItem?.name || 'Simulasi AR'}</h2>
          
          <model-viewer
            src={activeItem?.modelGlb}
            ios-src={activeItem?.modelUsdz}
            alt={activeItem?.name}
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            auto-rotate
            style={{ width: '100%', maxWidth: '600px', height: '450px', backgroundColor: '#1e293b', borderRadius: '1rem' }}
          >
            <button slot="ar-button" style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '30px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
            }}> 
              🔍 Munculkan di Ruangan (AR)
            </button>
          </model-viewer>
        </div>
      </div>

      <Footer />
    </div>
  );
}