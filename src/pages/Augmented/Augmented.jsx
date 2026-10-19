import React from 'react';

function Augmented() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2>Simulasi AR Interaktif di Web</h2>

      {/* Model-viewer native */}
      <model-viewer
        src="/models/glb/male_body.glb" /* Ganti dengan path file .glb lokal Anda */
        ios-src="/models/organ.usdz" /* Opsional untuk iPhone */
        alt="Model 3D Organ Tubuh"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        style={{ width: '100%', maxWidth: '400px', height: '400px', backgroundColor: '#f9f9f9' }}
      >
        {/* Tombol ini otomatis memicu kamera HP untuk scan meja */}
        <button slot="ar-button" style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '30px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          🔍 Munculkan di Meja (AR)
        </button>
      </model-viewer>
    </div>
  );
}

export default Augmented;