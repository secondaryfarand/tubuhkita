import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import styles from './ArScanner.module.css';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Konfigurasi Peta Anatomi & Model 3D Organ
const ORGAN_MODELS = {
  paru: {
    name: 'Paru-Paru 3D',
    modelPath: '/models/glb/human_lungs.glb',
    scale: 0.85,
    relX: 1.1,    // Tepat di tengah rongga dada
    relY: 0.28,   // Area dada atas
  },
  jantung: {
    name: 'Jantung 3D',
    modelPath: '/models/glb/human_heart.glb',
    scale: 0.85,
    relX: 0.14,   // Agak ke sebelah kiri tubuh (kanan layar)
    relY: 0.32,   // Area dada tengah
  },
  hati: {
    name: 'Hati (Liver) 3D',
    modelPath: '/models/glb/human_liver.glb', // Sesuaikan dengan path file glb kamu
    scale: 0.80,
    relX: -0.22,  // Sebelah kanan tubuh (kiri layar)
    relY: 0.58,   // Perut kanan atas
  },
  lambung: {
    name: 'Lambung 3D',
    modelPath: '/models/glb/human_stomach.glb', // Sesuaikan dengan path file glb kamu
    scale: 0.80,
    relX: 0.22,   // Sebelah kiri tubuh (kanan layar)
    relY: 0.60,   // Perut kiri atas
  },
  usus: {
    name: 'Usus 3D',
    modelPath: '/models/glb/human_intestines.glb', // Sesuaikan dengan path file glb kamu
    scale: 0.85,
    relX: 0.0,    // Tengah perut
    relY: 0.88,   // Perut bawah sekitar pusar
  },
};

export default function ARScanner() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const threeCanvasRef = useRef(null);

  const [selectedOrganKey, setSelectedOrganKey] = useState('jantung');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isPoseDetected, setIsPoseDetected] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const sceneRef = useRef(null);
  const cameraThreeRef = useRef(null);
  const rendererRef = useRef(null);
  const currentModelRef = useRef(null);

  // 1. Load MediaPipe Scripts
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.crossOrigin = 'anonymous';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    Promise.all([
      loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js'),
      loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/pose/pose.js'),
    ])
      .then(() => setIsScriptLoaded(true))
      .catch((err) => console.error('Gagal memuat skrip MediaPipe:', err));
  }, []);

  // 2. Setup Three.js Scene
  useEffect(() => {
    if (!isCameraActive || !threeCanvasRef.current) return;

    const width = 1280;
    const height = 720;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);
    cameraThreeRef.current = camera;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(0, 5, 5);
    scene.add(dirLight);

    const renderer = new THREE.WebGLRenderer({
      canvas: threeCanvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    rendererRef.current = renderer;

    return () => {
      renderer.dispose();
    };
  }, [isCameraActive]);

  // 3. Load 3D Model Sesuai Organ yang Dipilih
  useEffect(() => {
    if (!sceneRef.current) return;

    const loader = new GLTFLoader();
    const config = ORGAN_MODELS[selectedOrganKey];

    loader.load(
      config.modelPath,
      (gltf) => {
        if (currentModelRef.current) {
          sceneRef.current.remove(currentModelRef.current);
        }
        const model = gltf.scene;
        model.visible = false;
        currentModelRef.current = model;
        sceneRef.current.add(model);
      },
      undefined,
      () => {
        // Fallback jika file GLB tidak ditemukan / error
        if (currentModelRef.current) {
          sceneRef.current.remove(currentModelRef.current);
        }
        const geometry = new THREE.SphereGeometry(0.3, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0x0284c7, wireframe: true });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.visible = false;
        currentModelRef.current = mesh;
        sceneRef.current.add(mesh);
      }
    );
  }, [selectedOrganKey, isCameraActive]);

  // 4. MediaPipe Pose & Tracking Synchronization
  useEffect(() => {
    if (!isCameraActive || !isScriptLoaded || !window.Pose || !window.Camera) return;

    const pose = new window.Pose({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.6,
    });

    pose.onResults((results) => {
  const canvas = canvasRef.current;
  const video = videoRef.current;
  if (!canvas || !video) return;

  const ctx = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.save();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 1. Tampilkan Video Kamera Mode Cermin
  ctx.scale(-1, 1);
  ctx.translate(-canvas.width, 0);
  ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

  if (results.poseLandmarks && currentModelRef.current && cameraThreeRef.current) {
    const leftShoulder = results.poseLandmarks[11];
    const rightShoulder = results.poseLandmarks[12];
    const leftHip = results.poseLandmarks[23];
    const rightHip = results.poseLandmarks[24];

    if (
      leftShoulder &&
      rightShoulder &&
      leftShoulder.visibility > 0.5 &&
      rightShoulder.visibility > 0.5
    ) {
      setIsPoseDetected(true);
      currentModelRef.current.visible = true;

      // 2. Ambil Koordinat Normalisasi Asli (0.0 - 1.0)
      const shoulderNormX = (leftShoulder.x + rightShoulder.x) / 2;
      const shoulderNormY = (leftShoulder.y + rightShoulder.y) / 2;

      const shoulderWidthNorm = Math.hypot(
        rightShoulder.x - leftShoulder.x,
        rightShoulder.y - leftShoulder.y
      );

      let torsoHeightNorm = shoulderWidthNorm * 1.3;
      if (leftHip && rightHip && leftHip.visibility > 0.4) {
        const hipNormY = (leftHip.y + rightHip.y) / 2;
        torsoHeightNorm = Math.abs(hipNormY - shoulderNormY);
      }

      // 3. Ambil Konfigurasi Organ Aktif
      const activeConfig = ORGAN_MODELS[selectedOrganKey] || ORGAN_MODELS.jantung;

      // Hitung Titik Target Normalisasi
      const targetNormX = shoulderNormX + (activeConfig.relX * shoulderWidthNorm);
      const targetNormY = shoulderNormY + (activeConfig.relY * torsoHeightNorm);

      // 4. Konversi ke NDC [-1, 1] yang Sinkron dengan Cermin Kamera
      // Menggunakan (1 - targetNormX) khusus untuk sumbu X Three.js agar sejajar cermin
      const ndcX = -((targetNormX * 2) - 1);
      const ndcY = -(targetNormY * 2 - 1);

      // 5. Unproject Titik NDC ke Ruang Dunia 3D Three.js
      const camera = cameraThreeRef.current;
      const vec = new THREE.Vector3(ndcX, ndcY, 0.5);
      vec.unproject(camera);
      const dir = vec.sub(camera.position).normalize();

      // Proyeksi ke bidang Z = 0
      const distance = (0 - camera.position.z) / dir.z;
      const worldPosition = camera.position.clone().add(dir.multiplyScalar(distance));

      // 6. Set Posisi & Skala Dinamis Model 3D
      currentModelRef.current.position.copy(worldPosition);

      const dynamicScale = shoulderWidthNorm * 3.2 * activeConfig.scale;
      currentModelRef.current.scale.set(dynamicScale, dynamicScale, dynamicScale);

    } else {
      setIsPoseDetected(false);
      currentModelRef.current.visible = false;
    }
  } else if (currentModelRef.current) {
    setIsPoseDetected(false);
    currentModelRef.current.visible = false;
  }

  // Render Scene Three.js
  if (rendererRef.current && sceneRef.current && cameraThreeRef.current) {
    rendererRef.current.render(sceneRef.current, cameraThreeRef.current);
  }

  ctx.restore();
});

    let camera = null;
    if (videoRef.current) {
      camera = new window.Camera(videoRef.current, {
        onFrame: async () => {
          if (videoRef.current) {
            await pose.send({ image: videoRef.current });
          }
        },
        width: 1280,
        height: 720,
      });
      camera.start();
    }

    return () => {
      if (camera) camera.stop();
      pose.close();
    };
  }, [isCameraActive, isScriptLoaded, selectedOrganKey]);

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        <header className={styles.headerSection}>
          <h1 className={styles.pageTitle}>AR 3D Scanner Anatomi</h1>
          <p className={styles.pageSubtitle}>
            Arahkan kamera ke tubuh Anda untuk memproyeksikan model organ 3D interaktif secara real-time.
          </p>
        </header>

        <div className={styles.organSelector}>
          {Object.keys(ORGAN_MODELS).map((key) => (
            <button
              key={key}
              className={`${styles.selectBtn} ${selectedOrganKey === key ? styles.activeBtn : ''}`}
              onClick={() => setSelectedOrganKey(key)}
            >
              <i className="fa-solid fa-cube"></i> {ORGAN_MODELS[key].name}
            </button>
          ))}
        </div>

        <div className={styles.viewfinderCard}>
          {!isCameraActive ? (
            <div className={styles.placeholderBox}>
              <i className="fa-solid fa-camera-retro"></i>
              <p>Kamera belum aktif. Klik tombol di bawah untuk memulai scanner AR 3D.</p>
              <Button variant="primary" onClick={() => setIsCameraActive(true)} disabled={!isScriptLoaded}>
                {isScriptLoaded ? 'Mulai AR 3D Scanner' : 'Memuat Modul AR...'}
              </Button>
            </div>
          ) : (
            <div className={styles.canvasWrapper}>
              <video ref={videoRef} className={styles.hiddenVideo} playsInline />
              <canvas ref={canvasRef} className={styles.arCanvas} />
              <canvas ref={threeCanvasRef} className={styles.threeCanvas} />

              <div className={styles.statusBadge}>
                {isPoseDetected ? (
                  <span className={styles.detected}>
                    <i className="fa-solid fa-circle-check"></i> Posisi Tubuh Terdeteksi
                  </span>
                ) : (
                  <span className={styles.searching}>
                    <i className="fa-solid fa-spinner fa-spin"></i> Mencari Posisi Tubuh...
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}