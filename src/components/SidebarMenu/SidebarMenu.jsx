import { useState, useEffect } from 'react';
import styles from './SidebarMenu.module.css';

export default function SidebarMenu({ 
  organList = [], 
  augmentedList = [], 
  onSelectOrgan, 
  onSelectAugmented, 
  title = "Daftar Menu" 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi posisi scroll halaman
  useEffect(() => {
    const handleScroll = () => {
      // Tombol baru akan naik jika halaman digulir lebih dari 30 pixel ke bawah
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Cek posisi scroll saat komponen pertama kali dirender
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Tombol Toggle dengan tambahan kelas 'scrolled' saat halaman digulir */}
      <button 
        className={`${styles.mobileToggle} ${isScrolled ? styles.scrolled : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu Navigasi"
      >
        {isOpen ? '✕ Tutup Menu' : '☰ Pilih Menu'} 
      </button>

      {isOpen && (
        <div 
          className={styles.backdrop} 
          onClick={() => setIsOpen(false)} 
        />
      )}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>
            Pilih salah satu daftar di bawah ini untuk melihat detail dan eksplorasi model 3D atau AR secara interaktif.
          </p>
        </div>

        {/* SECTION 1: Model 3D Anatomi */}
        <div className={styles.organSection}>
          <h2 className={styles.sectionTitle}>Model 3D Anatomi</h2>
          {organList.length > 0 ? (
            organList.map((item) => (
              <button 
                key={item.id} 
                className={styles.organButton} 
                onClick={() => {
                  onSelectOrgan(item.id);
                  setIsOpen(false);
                }}
              >
                {item.title || item.name}
              </button>
            ))
          ) : (
            <p className={styles.description}>Tidak ada data.</p>
          )}
        </div>

        {/* SECTION 2: Anatomi Augmented Reality */}
        <div className={styles.organSection} style={{ marginTop: '1.5rem' }}>
          <h2 className={styles.sectionTitle}>Anatomi Augmented Reality</h2>
          {augmentedList.length > 0 ? (
            augmentedList.map((item) => (
              <button 
                key={item.id} 
                className={styles.organButton} 
                onClick={() => {
                  onSelectAugmented(item.id);
                  setIsOpen(false);
                }}
              >
                {item.name || item.title}
              </button>
            ))
          ) : (
            <p className={styles.description}>Tidak ada data AR.</p>
          )}
        </div>

        <div className={styles.authorCard}>
          AnatoMed Navigation Module
        </div>
      </aside>
    </>
  );
}