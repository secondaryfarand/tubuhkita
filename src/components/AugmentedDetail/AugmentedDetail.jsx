import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import SidebarMenu from '../SidebarMenu/SidebarMenu';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';

import { ORGAN_LIST } from '../../data/organData';
import { AUGMENTED_OBJECT_LIST } from '../../data/augmentedData';
import styles from './AugmentedDetail.module.css';

export default function AugmentedDetail({ onGoToDashboard }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const activeItem = AUGMENTED_OBJECT_LIST.find((item) => item.id === id) || AUGMENTED_OBJECT_LIST[0];
  console.log(activeItem);

  const handleSelectOrgan = (organId) => {
    navigate(`/anatomi/${organId}`);
  };

  const handleSelectAugmented = (augmentedId) => {
    navigate(`/augmented/${augmentedId}`);
  };

  return (
    <div className={styles.container}>
      <Navbar onNavigateDashboard={onGoToDashboard} />
      
      <div className={styles.bottomActionContainer}>
        <Button 
          variant="primary" 
          onClick={() => navigate('/anatomi')}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </Button>
      </div>

      <div className={styles.mainLayout}>
        <SidebarMenu 
          organList={ORGAN_LIST} 
          augmentedList={AUGMENTED_OBJECT_LIST}
          onSelectOrgan={handleSelectOrgan}
          onSelectAugmented={handleSelectAugmented}
          title="Menu Navigasi"
        />

        <div className={styles.viewerSection}>
          <h2 className={styles.title}>{activeItem?.name || 'Simulasi AR'}</h2>
          <p className={styles.description}>
            {activeItem?.description || 'Eksplorasi model dalam bentuk Augmented Reality.'}
          </p>
          
          <div className={styles.viewerWrapper}>
            <model-viewer
              src={activeItem?.modelGlb}
              ios-src={activeItem?.modelUsdz}
              alt={activeItem?.name}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              auto-rotate
              className={styles.modelViewer}
            >
              <button slot="ar-button" className={styles.arButton}>
                Munculkan di Ruangan (AR)
              </button>
            </model-viewer>

            <div className={styles.qrContainer}>
              <img 
                src={activeItem?.qr}
                alt="QR Code untuk AR" 
                className={styles.qrImage} 
              />
              <p className={styles.qrText}>
                Scan QR code ini dengan kamera HP untuk mencoba mode Augmented Reality secara langsung!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}