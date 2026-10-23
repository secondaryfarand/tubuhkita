import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useProgress } from '../../hooks/userProgress';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

import { SYSTEM_DATA } from '../../data/dashboardData';
import styles from './Dashboard.module.css';

export default function Dashboard({ onGoToDashboard }) {
  const navigate = useNavigate();
  const { progress, resetProgress } = useProgress();
  const containerRef = useRef(null);

  const readModules = progress.readModules || [];
  const totalOrgansLearned = readModules.length;

  // const totalOrgansLearned = progress.readModules.length;
  const quizScoresObj = progress.quizScores || {};
  const quizEntries = Object.entries(quizScoresObj);
  const totalQuizFinished = quizEntries.length;
  const avgScore = totalQuizFinished > 0 
    ? Math.round(quizEntries.reduce((acc, [, score]) => acc + score, 0) / totalQuizFinished) 
    : 0;

  const allSystemOrgans = SYSTEM_DATA.flatMap(sys => sys.organs || []);
  const totalAllOrgans = allSystemOrgans.length > 0 ? allSystemOrgans.length : 17;

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
    tl.from(`.${styles.headerRow}`, {
      y: -30,
      opacity: 0,
    })
    .from(`.${styles.metricCard}`, {
      y: 40,
      opacity: 0,
      stagger: 0.15,
    }, '-=0.4')
    .from(`.${styles.sectionCard}`, {
      y: 30,
      opacity: 0,
    }, '-=0.3')
    .from(`.${styles.progressBarFill}`, {
      width: '0%',
      duration: 1.2,
      stagger: 0.1,
      ease: 'power2.out',
    }, '-=0.4');
  }, { scope: containerRef });

  return (
    <div className={styles.pageWrapper} ref={containerRef}>
      <Navbar onNavigateDashboard={onGoToDashboard} />

      <main className={styles.dashboardContainer}>
        <div className={styles.headerRow}>
          <div>
            <h1 className={styles.title}>Dashboard Capaian</h1>
            <p className={styles.subtitle}>Pantau progres belajar dan evaluasi pemahaman anatomi Anda.</p>
          </div>
          <div className={styles.actionGroup}>
            <Button variant="outline" onClick={() => navigate('/anatomi')}>
              Eksplorasi Anatomi
            </Button>
            <Button variant="primary" onClick={resetProgress}>
              Reset Data
            </Button>
          </div>
        </div>

        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Organ Dipelajari</span>
            <div className={styles.metricValue}>
              {totalOrgansLearned}<span className={styles.metricTotal}>/{totalAllOrgans}</span>
            </div>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Skor Kuis Rata-Rata</span>
            <div className={styles.metricValue}>{avgScore}%</div>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Total Kuis Selesai</span>
            <div className={styles.metricValue}>{totalQuizFinished}</div>
          </div>
        </div>

        <div className={styles.sectionCard}>
          <h2 className={styles.sectionTitle}>Progres per Sistem Tubuh</h2>
          <div className={styles.systemList}>
            {SYSTEM_DATA.map((sys) => {
              const systemOrgans = sys.organs || [];
              const completedCount = systemOrgans.filter(orgId => readModules.includes(orgId)).length;
              const totalOrgans = systemOrgans.length > 0 ? systemOrgans.length : 1;
              const percentage = Math.round((completedCount / totalOrgans) * 100);
              return (
                <div key={sys.id} className={styles.systemItem}>
                  <div className={styles.systemLabelRow}>
                    <span className={styles.systemName}>
                      {sys.name} <span className={styles.systemCount}>({completedCount}/{totalOrgans} organ)</span>
                    </span>
                    <span className={styles.systemPercent}>{percentage}%</span>
                  </div>
                  <div className={styles.progressBarTrack}>
                    <div 
                      className={styles.progressBarFill} 
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}