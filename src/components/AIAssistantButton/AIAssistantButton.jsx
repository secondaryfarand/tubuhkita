import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AIAssistantButton.module.css'; 

export default function AIAssistantButton({ contextData }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ai-chat', { 
      state: { 
        topic: contextData?.topic || 'Anatomi Umum',
        initialPrompt: contextData?.prompt || 'Halo AI, saya ingin tahu lebih lanjut mengenai materi anatomi ini.' 
      } 
    });
  };

  return (
    <button 
      className={styles.aiButton} 
      onClick={handleClick}
      title="Tanya AI Terkait Halaman Ini"
    >
        <i className={`fa-solid fa-wand-sparkles ${styles.aiIcon}`} />
        <span>Tanya AI</span>
    </button>
  );
}