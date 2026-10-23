import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

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

  const containerRef = useRef(null);
  const backBtnRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const viewerWrapperRef = useRef(null);

  const activeItem = AUGMENTED_OBJECT_LIST.find((item) => item.id === id) || AUGMENTED_OBJECT_LIST[0];

  const handleSelectOrgan = (organId) => {
    navigate(`/anatomi/${organId}`);
  };

  const handleSelectAugmented = (augmentedId) => {
    navigate(`/augmented/${augmentedId}`);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(backBtnRef.current, 
        { opacity: 0, x: -20 }, 
        { opacity: 1, x: 0, duration: 0.5 }
      )
      .fromTo(titleRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5 }, 
        '-=0.3'
      )
      .fromTo(descRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5 }, 
        '-=0.3'
      )
      .fromTo(viewerWrapperRef.current, 
        { opacity: 0, scale: 0.95, y: 15 }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.6 }, 
        '-=0.2'
      );
    }, containerRef);

    return () => ctx.revert();
  }, [id]);

  return (
    <div className={styles.container} ref={containerRef}>
      <Navbar onNavigateDashboard={onGoToDashboard} />
      
      <div className={styles.bottomActionContainer} ref={backBtnRef}>
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
          <h2 className={styles.title} ref={titleRef}>
            {activeItem?.name || 'Simulasi AR'}
          </h2>
          <p className={styles.description} ref={descRef}>
            {activeItem?.description || 'Eksplorasi model dalam bentuk Augmented Reality.'}
          </p>
          
          <div className={styles.viewerWrapper} ref={viewerWrapperRef}>
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
              <Button slot="ar-Button" className={styles.arButton}>
                Munculkan di Ruangan (AR)
              </ Button>
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