import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import styles from './XScanner.module.css';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ORGAN_MODELS = {
  semua: {
    name: 'X-Ray Anatomi Lengkap',
    modelPath: '/models/glb/male_body.glb', // Model Torso X-Ray Utama
    scale: 1.0,
  },
  paru: {
    name: 'Paru-Paru',
    modelPath: '/models/glb/human_lungs.glb',
    scale: 0.9,
  },
  jantung: {
    name: 'Jantung',
    modelPath: '/models/glb/human_heart.glb',
    scale: 0.85,
  },
  hati: {
    name: 'Hati (Liver)',
    modelPath: '/models/glb/human_liver.glb',
    scale: 0.8,
  },
  lambung: {
    name: 'Lambung',
    modelPath: '/models/glb/human_stomach.glb',
    scale: 0.8,
  },
  usus: {
    name: 'Usus',
    modelPath: '/models/glb/human_intestines.glb',
    scale: 0.85,
  },
};

export default function XScanner() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const threeCanvasRef = useRef(null);

  const [selectedOrganKey, setSelectedOrganKey] = useState('semua');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isPoseDetected, setIsPoseDetected] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const sceneRef = useRef(null);
  const cameraThreeRef = useRef(null);
  const rendererRef = useRef(null);
  const currentModelRef = useRef(null);

  // 1. Load MediaPipe Libraries
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

  // 2. Inisialisasi Three.js Scene & Lighting
  useEffect(() => {
    if (!isCameraActive || !threeCanvasRef.current) return;

    const width = 1280;
    const height = 720;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);
    cameraThreeRef.current = camera;

    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
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

  // 3. Load Model 3D dengan Fallback Sphere Wireframe
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
        if (currentModelRef.current) {
          sceneRef.current.remove(currentModelRef.current);
        }
        const geometry = new THREE.CylinderGeometry(0.3, 0.2, 0.8, 32);
        const material = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          wireframe: true,
          transparent: true,
          opacity: 0.7,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.visible = false;
        currentModelRef.current = mesh;
        sceneRef.current.add(mesh);
      }
    );
  }, [selectedOrganKey, isCameraActive]);

  // 4. Dual-Anchor MediaPipe Tracking Loop
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

  // 1. Mirroring Kamera Visual
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

      // 2. Hitung Titik Tengah Dada & Ukuran Torso
      const shoulderNormX = (leftShoulder.x + rightShoulder.x) / 2;
      const shoulderNormY = (leftShoulder.y + rightShoulder.y) / 2;

      let hipNormY = shoulderNormY + 0.35;
      if (leftHip && rightHip && leftHip.visibility > 0.4) {
        hipNormY = (leftHip.y + rightHip.y) / 2;
      }

      // Jangkar Tepat di Tengah Rongga Dada
      const chestCenterX = shoulderNormX;
      const chestCenterY = shoulderNormY + ((hipNormY - shoulderNormY) * 0.35);

      const shoulderWidthNorm = Math.hypot(
        rightShoulder.x - leftShoulder.x,
        rightShoulder.y - leftShoulder.y
      );
      const torsoHeightNorm = Math.abs(hipNormY - shoulderNormY);

      // 3. Konversi ke NDC Sumbu Kamera Cermin [-1, 1]
      const ndcX = -((chestCenterX * 2) - 1);
      const ndcY = -(chestCenterY * 2 - 1);

      // 4. Proyeksi World Space Three.js
      const camera = cameraThreeRef.current;
      const vec = new THREE.Vector3(ndcX, ndcY, 0.5);
      vec.unproject(camera);
      const dir = vec.sub(camera.position).normalize();

      const distance = (0 - camera.position.z) / dir.z;
      const worldPosition = camera.position.clone().add(dir.multiplyScalar(distance));

      // 5. ATUR POSISI, ROTASI MEMPERBAIKI MODEL TERBALIK, DAN SKALA PRESISI
      currentModelRef.current.position.copy(worldPosition);

      // Kunci Rotasi Tegak Lurus (Membalikkan jika model terimpor terbalik)
      currentModelRef.current.rotation.set(0, 0, 0); 

      // Skala Terkalibrasi Proporsional Tubuh (Pengali Dikecilkan dari 3.2 ke 1.1)
      const activeConfig = ORGAN_MODELS[selectedOrganKey] || ORGAN_MODELS.semua;
      const fittedScaleX = shoulderWidthNorm * 1.15 * activeConfig.scale;
      const fittedScaleY = torsoHeightNorm * 0.95 * activeConfig.scale;
      const fittedScaleZ = fittedScaleX; // Jaga proporsi kedalaman 3D

      currentModelRef.current.scale.set(fittedScaleX, fittedScaleY, fittedScaleZ);

    } else {
      setIsPoseDetected(false);
      currentModelRef.current.visible = false;
    }
  } else if (currentModelRef.current) {
    setIsPoseDetected(false);
    currentModelRef.current.visible = false;
  }

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
          <h1 className={styles.pageTitle}>AnatoMed X-Ray Body Scanner</h1>
          <p className={styles.pageSubtitle}>
            Pindai tubuh Anda menggunakan lensa X-Ray interaktif untuk melihat struktur organ bagian dalam secara real-time.
          </p>
        </header>

        <div className={styles.organSelector}>
          {Object.keys(ORGAN_MODELS).map((key) => (
            <button
              key={key}
              className={`${styles.selectBtn} ${selectedOrganKey === key ? styles.activeBtn : ''}`}
              onClick={() => setSelectedOrganKey(key)}
            >
              <i className="fa-solid fa-layer-group"></i> {ORGAN_MODELS[key].name}
            </button>
          ))}
        </div>

        <div className={styles.viewfinderCard}>
          {!isCameraActive ? (
            <div className={styles.placeholderBox}>
              <i className="fa-solid fa-expand"></i>
              <p>Kamera belum aktif. Klik tombol di bawah untuk memulai pemindaian X-Ray tubuh.</p>
              <Button variant="primary" onClick={() => setIsCameraActive(true)} disabled={!isScriptLoaded}>
                {isScriptLoaded ? 'Aktifkan X-Ray Scanner' : 'Memuat Modul AR...'}
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
                    <i className="fa-solid fa-circle-check"></i> X-Ray Terkunci pada Torso
                  </span>
                ) : (
                  <span className={styles.searching}>
                    <i className="fa-solid fa-spinner fa-spin"></i> Memindai Tubuh User...
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