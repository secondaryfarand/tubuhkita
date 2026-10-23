import React from 'react';
import styles from './KuisCard.module.css';


export default function KuisCard({ organ, isUnlocked, onCardClick }) {
  return (
    <article 
      className={`${styles.card} ${!isUnlocked ? styles.lockedCard : ''}`}
      onClick={() => isUnlocked && onCardClick(organ.id)}
      tabIndex={isUnlocked ? 0 : -1}
      role="button"
      aria-disabled={!isUnlocked}
    >
      <div className={styles.cardAccent}></div>

      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle} title={organ.name}>
            {organ.name}
          </h2>
          <div className={`${styles.statusIcon} ${isUnlocked ? styles.unlocked : styles.locked}`}>
            <i className={`fa-solid ${isUnlocked ? 'fa-lock-open' : 'fa-lock'}`}></i>
          </div>
        </div>
        
        <div className={styles.cardDivider} />
        
        {isUnlocked ? (
          <div className={styles.cardStats}>
            <span className={styles.statItem} title="Jumlah Soal">
              <i className="fa-solid fa-file-lines"></i>
              <span>5 Soal</span>
            </span>

            <span className={styles.statItem} title="Durasi Pengerjaan">
              <i className="fa-solid fa-clock"></i>
              <span>30s / soal</span>
            </span>
          </div>
        ) : (
          <div className={styles.lockedMessage}>
            <i className="fa-solid fa-book-open"></i>
            <span>Baca modul 3D terlebih dahulu untuk membuka kuis ini</span>
          </div>
        )}
      </div>
    </article>
  );
}