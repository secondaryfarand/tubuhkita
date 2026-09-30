import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Button from '../Button/Button';
import styles from './Header.module.css';

gsap.registerPlugin(useGSAP);

export default function Header() {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(`.${styles.logo}`, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        clearProps: 'all', 
      })
        .from(
          `.${styles.mainTitle}`,
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
            clearProps: 'all',
          },
          '-=0.2'
        )
        .from(
          `.${styles.tag}`,
          {
            opacity: 0,
            y: 10,
            duration: 0.3,
            stagger: 0.08,
            clearProps: 'all',
          },
          '-=0.2'
        )
        .from(
          `.${styles.cardText}`,
          {
            opacity: 0,
            y: 10,
            duration: 0.4,
            clearProps: 'all',
          },
          '-=0.2'
        );
    },
    { scope: headerRef }
  );
  return (
    <header className={styles.heroSection} ref={headerRef}>
      <div className={styles.darkBackground} />
      <video
        className={styles.bgVideo}
        autoPlay
        loop
        muted
        playsInline
        >
        <source src="/assets/preview-1-skull.webm" type="video/webm" />
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
        {/* sumber : http://youtube.com/watch?v=-OhT1wjWvFs&list=LL&index=19 */}
      </video>
      <div className={styles.videoDarkOverlay} />

      <div className={styles.container}>
        
        <div className={styles.heroCard}>
          <div className={styles.logo} onClick={() => navigate('/')}>
            <img className={styles.logoBadge} src="/favicon.svg" alt="" />
            <span className={styles.logoText}>TubuhKita</span>
          </div>
          <div className={styles.headingBox}>
            <h1 className={styles.mainTitle}>
              Pelajari Anatomi & Organ <span className={styles.gradientText}>Tubuh </span> <br />
              secara <span className={styles.gradientText}>Interaktif & Presisi</span>
            </h1>
          </div>

          <div className={styles.cardOverlay}>
            <div className={styles.tagGroup}>
              <span className={styles.tag}>10 Model 3D Interaktif</span>
              <span className={styles.tag}>+15 Modul Belajar</span>
              <span className={styles.tag}>+20 Soal Kuis Anatomi</span>
            </div>

            <div className={styles.cardText}>
              <p>Terhubung langsung dengan Wikipedia & Model Organ Tiga Dimensi Interaktif</p>
              <Button variant="primary" onClick={() => navigate('/anatomi')}>
                Mulai Eksplorasi Sekarang
              </Button>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}