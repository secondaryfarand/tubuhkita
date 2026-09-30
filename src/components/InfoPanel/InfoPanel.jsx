import React, { useState, useEffect } from 'react';
import styles from './InfoPanel.module.css';

export default function InfoPanel({ query }) {
  const [wikiData, setWikiData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setWikiData(null);
      return;
    }

    const fetchWikiData = async () => {
      setWikiData(null);
      setLoading(true);

      try {
        /* Sumber Data: Wikipedia REST API v1 (id.wikipedia.org) */
        const url = `https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Respon Wikipedia API bermasalah: ' + response.status);
        }

        const data = await response.json();

        setWikiData({
          title: data.title,
          desc: data.extract || 'Informasi ringkasan medis belum tersedia dalam Bahasa Indonesia.',
          img: data.thumbnail?.source
        });
      } catch (error) {
        console.error('Gagal mengambil data dari API Wikipedia:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWikiData();
  }, [query]);

  return (
    <section className={styles.infoPanel}>
      <h3 className={styles.sectionTitle}>Eksplorasi Wikipedia</h3>

      {loading ? (
        <p className={styles.statusText}>
          Menghubungkan ke API Wikipedia & mengunduh ringkasan medis...
        </p>
      ) : wikiData ? (
        <div className={styles.content}>
          <h4 className={styles.wikiTitle}>{wikiData.title}</h4>
          {wikiData.img && (
            <img src={wikiData.img} alt={wikiData.title} className={styles.wikiImg} />
          )}
          <p className={styles.wikiText}>{wikiData.desc}</p>
        </div>
      ) : (
        <p className={styles.placeholderText}>
          Silakan klik salah satu target bagian pada menu bar sebelah kiri untuk menampilkan informasi medis.
        </p>
      )}
    </section>
  );
}