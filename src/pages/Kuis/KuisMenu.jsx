import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useProgress } from '../../hooks/userProgress';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import KuisCard from '../../components/KuisCard/KuisCard';
import styles from './KuisMenu.module.css';

const ORGANS_QUIZ_LIST = [
  { id: 'jantung', name: 'Jantung', category: 'Peredaran Darah', icon: 'fa-heart-pulse' },
  { id: 'paru-paru', name: 'Paru-paru', category: 'Pernapasan', icon: 'fa-lungs' },
  { id: 'lambung', name: 'Lambung', category: 'Pencernaan', icon: 'fa-utensils' },
  { id: 'usus', name: 'Usus', category: 'Pencernaan', icon: 'fa-dna' },
  { id: 'pankreas', name: 'Pankreas', category: 'Pencernaan', icon: 'fa-prescription-bottle-medical' },
  { id: 'tengkorak', name: 'Tengkorak', category: 'Rangka', icon: 'fa-skull' },
  { id: 'tulang-tangan', name: 'Tulang Tangan', category: 'Rangka', icon: 'fa-hand' },
  { id: 'otak', name: 'Otak', category: 'Saraf', icon: 'fa-brain' },
  { id: 'ginjal', name: 'Ginjal', category: 'Ekskresi', icon: 'fa-filter' },
  { id: 'liver', name: 'Liver / Hati', category: 'Ekskresi', icon: 'fa-shield-halved' },
  { id: 'mata', name: 'Mata', category: 'Indra', icon: 'fa-eye' },
  { id: 'lidah', name: 'Lidah', category: 'Indra', icon: 'fa-comment-medical' },
];

export default function KuisMenu() {
  const navigate = useNavigate();
  const { progress } = useProgress();
  const headerRef = useRef(null);

  const readModules = progress.readModules || [];

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
    navigate(`/kuis/${organId}`);
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        <header ref={headerRef} className={styles.headerSection}>
          <h1 className={styles.pageTitle}>Menu Kuis Anatomi</h1>
          <p className={styles.pageSubtitle}>
            Selesaikan modul eksplorasi 3D organ terkait untuk membuka dan mengerjakan kuis evaluasinya.
          </p>
        </header>

        <section className={styles.gridSection}>
          {ORGANS_QUIZ_LIST.map((item) => {
            // Cek apakah organ ini sudah pernah dibaca oleh user
            const isUnlocked = readModules.includes(item.id);

            return (
              <KuisCard 
                key={item.id}
                organ={item}
                isUnlocked={isUnlocked}
                onCardClick={handleCardClick}
              />
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}