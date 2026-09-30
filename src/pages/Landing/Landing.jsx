import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Feedback from '../../components/Feedback/Feedback';
import Module from '../../components/ModuleGrid/ModuleGrid';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import styles from './Landing.module.css';

import { ORGAN_LIST } from '../../data/organData';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Landing({ onGoToDashboard }) {
  const organ = ORGAN_LIST.find((item) => item.id === "muscle-tissue");
  const landingRef = useRef(null);

  useGSAP(
    () => {
      const sectionHeaders = gsap.utils.toArray(`.${styles.sectionHeader}`);
      sectionHeaders.forEach((header) => {
        gsap.from(header, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%', 
            toggleActions: 'play none none none',
          },
        });
      });

      gsap.from(`.${styles.fiturItem}`, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.25, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: `#fitur`,
          start: 'top 75%',
        },
      });

      gsap.from(`.${styles.stepCard}`, {
        opacity: 0,
        scale: 0.9,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: `#eksplorasi`,
          start: 'top 80%',
        },
      });
    },
    { scope: landingRef }
  );

  return (
    <div className={styles.pageWrapper} ref={landingRef}>
      <Navbar onNavigateDashboard={onGoToDashboard} />
      <Header />

      <section id="latar-belakang" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Kenal namanya, tak tau wujudnya</h2>
        </div>
        <div className={styles.latarSplitGrid}>
          <div className={styles.latarImageWrapper}>
            <img 
              src="/assets/siswa-sma.jpg"
              alt="Visualisasi Gambar 1" 
              className={styles.latarLandscapeImage}
            />
          </div>
          <div className={styles.textContent}>
            <p>
              Banyak siswa di Indonesia familiar dengan nama-nama organ tubuh, namun belum pernah melihat visualisasi bentuk aslinya secara nyata. TubuhKita hadir memecahkan masalah ini dengan menghadirkan visualisasi data tingkat lanjut berteknologi tiga dimensi, memungkinkan siswa mengeksplorasi setiap struktur anatomi secara interaktif dan presisi.
            </p>
          </div>
        </div>
      </section>

      <section id="fitur" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Keunggulan kami</h2>
          <p>Dirancang khusus untuk memaksimalkan pengalaman pengguna dalam belajar.</p>
        </div>
        <div className="fiturContent"></div>
        
        <div className={styles.fiturItem}>
          <div className={styles.latarImageWrapper}>
            <img 
              src="/assets/belajar-anatomi.jpg" 
              alt="Belajar Anatomi" 
              className={styles.latarLandscapeImage}
            />
          </div>
          <div className={styles.textContent}>
            <div className={styles.fiturAngkaWrapper}>
              <h1 className={styles.fiturAngka}>1</h1>
            </div>
            <h3>Belajar mudah dan lengkap</h3>
            <p>
              TubuhKita hadir memecahkan masalah ini dengan menghadirkan visualisasi data tingkat lanjut berteknologi tiga dimensi.
            </p>
          </div>
        </div>
        
        <div className={styles.fiturItem}>
          <div className={styles.textContent}>
            <h3>Model Interaktif Organ Tiga Dimensi </h3>
            <p>
              Rotasi 360 derajat dan perbesar setiap sudut serabut otot maupun organ dalam.
            </p>
          </div>
          <div className={styles.fiturAngkaWrapper}>
            <h1 className={styles.fiturAngka}>2</h1>
          </div>
          <div className={styles.latarImageWrapper}>
            <div className={styles.viewer3DWrapper}>
              {organ?.sketchfabId ? (
                <>
                  <iframe
                    title="Model Anatomi"
                    className={styles.iframe3D}
                    src={`https://sketchfab.com/models/${organ.sketchfabId}/embed?autostart=1&preload=1&ui_theme=light&transparent=0`}
                    allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
                  />
                  <div className={styles.viewerOverlayHint}>
                    <i className="fa-solid fa-cube"></i> 
                    {/* sumber ikon : font awesome */}
                    <span>Geser untuk Memutar</span>
                  </div>
                </>
              ) : (
                <div className={styles.viewerLoading}>
                  <i className="fa-solid fa-circle-notch fa-spin" style={{ fontSize: '1.5rem', color: '#0284c7' }}></i> 
                  {/* sumber: font awesome */}
                  <p>Memuat Model Anatomi 3D...</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.fiturItem}>
          <div className={styles.latarImageWrapper}>
            <img 
              src="/assets/raise-hand.jpg"
              alt="Kuis di Kelas" 
              className={styles.latarLandscapeImage}
            />
          </div>
          <div className={styles.textContent}>
            <div className={styles.fiturAngkaWrapper}>
              <h1 className={styles.fiturAngka}>3</h1>
            </div>
            <h3>Kuis Uji Pemahaman</h3>
            <p>
              Uji sejauh mana pemahaman struktur organ kamu lewat kuis. Tingkatkan skor dan raih nilai tertinggi.
            </p>
          </div>
        </div>
      </section>

      <section id="eksplorasi" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Tips Memulai dalam 3 Langkah</h2>
        </div>

        <div className={styles.stepGrid}>
          <div className={styles.stepCard}>
            <div className={styles.activeCardContent}>
              <h3>Baca Materi</h3>
              <p>Dapatkan akses ke belasan modul belajar yang menarik.</p>
            </div>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.activeCardContent}>
              <h3>Eksplorasi Nyata</h3>
              <p>Pahami Lebih Lanjut Dengan Visualisasi Tiga Dimensi</p>
            </div>
          </div>
          <div className={`${styles.stepCard} ${styles.stepCardActive}`}>
            <div className={styles.activeCardContent}>
              <h3>Kerjakan Kuis</h3>
              <p>Evaluasi pemahamanmu dan dapatkan skor secara langsung.</p>
              <Button variant="primary" onClick={onGoToDashboard} className={styles.stepBtn}>
                <a className={styles.arrAnchor} href="kuis">Coba Kuis ↗</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Feedback />
      <Module />
      <Footer />
    </div>
  );
}