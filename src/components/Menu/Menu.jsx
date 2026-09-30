import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { ORGAN_LIST } from '../../data/organData';
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

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        <header ref={headerRef} className={styles.headerSection}>
          <h1 className={styles.pageTitle}>Galeri Anatomi Organ 3D</h1>
          <p className={styles.pageSubtitle}>
            Pilih salah satu model di bawah ini untuk memulai eksplorasi interaktif dan penjelasan materi Wikipedia.
          </p>
        </header>

        <section className={styles.gridSection}>
          {ORGAN_LIST.map((organ) => (
            <article 
              key={organ.id} 
              className={styles.card}
              onClick={() => handleCardClick(organ.id)}
              tabIndex={0}
              role="button"
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={organ.thumbnail} 
                  alt={organ.title} 
                  className={styles.thumbnail}
                  loading="lazy"
                />
                <div className={styles.imageOverlay} />
                <span className={styles.badge3D}>3D Model</span>
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle} title={organ.title}>
                  {organ.title}
                </h2>
                <div className={styles.cardDivider} />
                <div className={styles.cardStats}>
                  <span className={styles.statItem} title="Dilihat">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    {organ.views}
                  </span>
                  <span className={styles.statItem} title="Komentar">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    {organ.comments}
                  </span>
                  <span className={styles.statItem} title="Suka">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    {organ.likes}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}