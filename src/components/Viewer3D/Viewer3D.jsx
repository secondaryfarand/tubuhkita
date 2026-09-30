import React, { useEffect, useRef } from 'react';
import styles from './Viewer3D.module.css';

export default function Viewer3D({ modelId, onApiReady }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!modelId) return;

    const initAPI = () => {
      if (!iframeRef.current || !window.Sketchfab) return;

      const client = new window.Sketchfab(iframeRef.current);
      client.init(modelId, {
        success: (api) => {
          api.start();
          api.addEventListener('viewerready', () => {
            if (onApiReady) onApiReady(api);
          });
        },
        error: () => console.error('Gagal menginisialisasi Sketchfab Viewer API')
      });
    };

    const scriptId = 'sketchfab-api-script';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
      script.async = true;
      script.onload = initAPI;
      document.body.appendChild(script);
    } else {
      initAPI();
    }
  }, [modelId, onApiReady]);

  return (
    <main className={styles.viewerContainer}>
      <div className={styles.iframeWrapper}>
        <iframe
          ref={iframeRef}
          title="Ecorche Anatomy Study"
          className={styles.iframe}
          src={`https://sketchfab.com/models/${modelId}/embed?autostart=1&preload=1&ui_theme=light&cardboard=1`}
          allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
          xr-spatial-tracking="true"
        />
      </div>
    </main>
  );
}