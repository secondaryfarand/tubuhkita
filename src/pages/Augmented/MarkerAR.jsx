import React from 'react';

function MarkerAR() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#000' }}>
      
      {/* Teks panduan opsional untuk pengguna */}
      <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 10, color: 'white', background: 'rgba(0,0,0,0.6)', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontFamily: 'sans-serif' }}>
        Arahkan kamera ke kartu target Mind-AR
      </div>

      <a-scene 
        mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/image-tracking/assets/card-example/card.mind; uiScanning: yes;" 
        color-space="sRGB" 
        renderer="colorManagement: true, physicallyCorrectLights" 
        vr-mode-ui="enabled: false" 
        device-orientation-permission-ui="enabled: false"
        style={{ width: '100%', height: '100%' }}
      >
        <a-camera position="0 0.5 0" look-controls="enabled: false"></a-camera>

        {/* Target Image Index 0 */}
        <a-entity mindar-image-target="targetIndex: 0">
          {/* Model 3D Organ Tubuh dengan path baru */}
          <a-entity 
            gltf-model="/models/glb/male_body.glb" 
            scale="0.1 0.1 0.1" 
            position="0 0 0" 
            rotation="90 0 0">
          </a-entity>
        </a-entity>
      </a-scene>
    </div>
  );
}

export default MarkerAR;