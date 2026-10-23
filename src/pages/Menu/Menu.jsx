import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MenuCard from '../../components/MenuCard/MenuCard'; 
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'; 

import { ORGAN_LIST } from '../../data/organData';
import { AUGMENTED_OBJECT_LIST } from '../../data/augmentedData'; 
import styles from './Menu.module.css';

export default function Menu() {
  const navigate = useNavigate();

  const headerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleCardClick = (organId) => {
    navigate(`/anatomi/${organId}`);
  };
  const handleSelectOrgan = (organId) => {
    navigate(`/anatomi/${organId}`);
  };

  const handleSelectAugmented = (augmentedId) => {
    navigate(`/augmented/${augmentedId}`);
  };



  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <SidebarMenu 
        organList={ORGAN_LIST} 
        augmentedList={AUGMENTED_OBJECT_LIST}
        onSelectOrgan={handleSelectOrgan}
        onSelectAugmented={handleSelectAugmented}
      />

      <main className={styles.mainContent}>
        <header ref={headerRef} className={styles.headerSection}>
          <h1 className={styles.pageTitle}>Galeri Anatomi Organ 3D</h1>
          <p className={styles.pageSubtitle}>
            Pilih salah satu model di bawah ini untuk memulai eksplorasi interaktif dan penjelasan materi Wikipedia.
          </p>
        </header>

        <section className={styles.gridSection}>
          {ORGAN_LIST.map((organ) => (
            <MenuCard 
              key={organ.id} 
              organ={organ} 
              onCardClick={handleCardClick} 
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}