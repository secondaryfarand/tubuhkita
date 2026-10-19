import React, {useRef, useState } from 'react';
import styles from './MenuCard.module.css';


export default function MenuCard({ organ, onCardClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <article 
      className={styles.card}
      onClick={() => onCardClick(organ.id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter} 
      onBlur={handleMouseLeave}
      tabIndex={0}
      role="button"
    >
      <div className={styles.imageWrapper}>
        <img 
          src={organ.thumbnail} 
          alt={organ.title} 
          className={`${styles.mediaElement} ${isHovered ? styles.hidden : styles.visible}`}
          loading="lazy"
        />
        <video
          ref={videoRef}
          src={organ.videoUrl}
          className={`${styles.mediaElement} ${isHovered ? styles.visible : styles.hidden}`}
          muted
          playsInline
          preload="none"
          loop
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
  );
}