import { useState } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({ activeOrgan, onSelectPart }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!activeOrgan) return null;
  const parts = activeOrgan.parts || [];

  return (
    <>
      <button 
        className={styles.mobileToggle} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu Anatomi"
      >
        {isOpen ? '✕ Tutup Menu' : '☰ Pilih Bagian'} 
      </button>

      {isOpen && (
        <div 
          className={styles.backdrop} 
          onClick={() => setIsOpen(false)} 
        />
      )}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h1 className={styles.title}>{activeOrgan.title}</h1>
          <p className={styles.description}>
            Eksplorasi struktur lapisan organ utama manusia beserta bagian-bagiannya secara interaktif.
          </p>
        </div>

        <div className={styles.organSection}>
          <h2 className={styles.sectionTitle}>Pilih Bagian Anatomi</h2>
          
          {parts.length > 0 ? (
            parts.map((part) => (
              <button 
                key={part.id} 
                className={styles.organButton} 
                onClick={() => {
                  onSelectPart(part.wikiQuery);
                  setIsOpen(false);
                }}
              >
                {part.name}
              </button>
            ))
          ) : (
            <p className={styles.description}>
              Tidak ada sub-bagian untuk model ini.
            </p>
          )}

          <button 
            className={styles.resetButton} 
            onClick={() => {
              onSelectPart(activeOrgan.wikiQuery);
              setIsOpen(false);
            }}
          >
            Reset Posisi Kamera
          </button>
        </div>

        <div className={styles.authorCard}>
          Model oleh{' '}
          <a 
            href="https://sketchfab.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.authorLink}
          >
            Sketchfab
          </a>
        </div>
      </aside>
    </>
  );
}