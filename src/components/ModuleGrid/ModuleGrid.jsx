import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ModuleGrid.module.css';
import { MODULE_DATA } from '../../data/moduleData';

export default function ModuleGrid() {
  const visibleModules = MODULE_DATA.slice(0, 6);

  return (
    <section className={styles.sectionContainer} aria-label="Modul Belajar Anatomi">
      <div className={styles.sectionHeader}>
        <h2>
          Berbagai Modul Belajar <span className={styles.gradientText}>yang Tersedia </span>
        </h2>
      </div>
      <div className={styles.cardGrid}>
        {visibleModules.map((item) => (
          <Link
            key={item.id}
            to={`/modul/${item.id}`}
            className={styles.moduleCard}
            tabIndex={0}
          >
            <figure className={styles.imageWrapper}>
              <img
                src={item.image}
                alt={`Modul ${item.title}`}
                className={styles.cardImage}
                loading="lazy"
              />
              <div className={styles.imageOverlay} />
            </figure>

            <figcaption className={styles.cardCaption}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </figcaption>
          </Link>
        ))}
      </div>
    </section>
  );
}