import React from 'react';

function MarkerAR() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#000' }}>
      <a-scene 
        mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/image-tracking/assets/card-example/card.mind;" 
        color-space="sRGB" 
        renderer="colorManagement: true, physicallyCorrectLights" 
        vr-mode-ui="enabled: false" 
        device-orientation-permission-ui="enabled: false"
        style={{ width: '100%', height: '100%' }}
      >
        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          {/* <a-box position="0 0.4 0" depth="0.1" height="0.1" width="0.1" color="teal"></a-box> */}
            <a-entity mindar-image-target="targetIndex: 0">
                {/* Ganti a-box dengan model 3D .glb lokal Anda */}
                <a-entity 
                // src="/models/glb/male_body.glb
                    gltf-model="/models/glb/male_body.glb" 
                    scale="0.5 0.5 0.5" 
                    position="0 0 0" 
                    rotation="0 45 0"
                ></a-entity>
            </a-entity>
        </a-entity>
      </a-scene>
    </div>
  );
}

export default MarkerAR;