import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.column}>
            <span className={styles.sectionLabel}>Navigasi Cepat</span>
            <ul className={styles.linkList}>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/mmodul">Modul</Link></li>
              <li><Link to="/anatomi">Anatomi</Link></li>
              <li><Link to="/kuis">Kuis</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <span className={styles.sectionLabel}>Informasi</span>
            <h3 className={styles.brandTitle}>TubuhKita</h3>
            <p className={styles.address}>
              Tim Web Development ABPS - Building Smarter Communities Through Digital Learning
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.directionLink}>
              Petunjuk Lokasi
            </a>
          </div>

          <div className={styles.socialColumn}>
            <div className={styles.socialIcons}>
              <a href="https://instagram.com" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
                {/* sumber: font awesome */}
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://youtube.com" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © 2026 TubuhKita Indonesia. Hak Cipta Dilindungi.
          </p>
          <button onClick={scrollToTop} className={styles.returnTopBtn}>
            Kembali ke Atas ↑
          </button>
        </div>
      </div>
    </footer>
  );
}