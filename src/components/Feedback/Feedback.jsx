import React from 'react';
import styles from './Feedback.module.css';
import { FEEDBACK_DATA } from '../../data/feedackData'; 

export default function Feedback() {
  const duplicatedFeedback = [...FEEDBACK_DATA, ...FEEDBACK_DATA];

  return (
    <section className={styles.feedbackSection}>
      <div className={styles.sectionHeader}>
        <h2>Apa Kata Mereka?</h2>
        <p>Pengalaman langsung dari siswa dan pengajar yang menggunakan AnatoMed.</p>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {duplicatedFeedback.map((item, index) => (
            <div key={`${item.id}-${index}`} className={styles.feedbackCard}>
              <div className={styles.cardHeader}>
                <div className={styles.avatarWrapper}>
                  <i className="fa-solid fa-user-graduate"></i>
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{item.name}</h4>
                  <p className={styles.authorMeta}>
                    {item.role} • {item.age} thn
                  </p>
                  <p className={styles.schoolName}>{item.school}</p>
                </div>
              </div>

              <div className={styles.ratingStars}>
                {[...Array(item.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>

              <p className={styles.commentText}>"{item.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}