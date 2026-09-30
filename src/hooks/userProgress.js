import { useState, useEffect } from 'react';

// Data Default saat pertama kali aplikasi dijalankan
const INITIAL_DATA = {
  readModules: ['jantung'], // ID organ yang pernah dibaca
  quizScores: { jantung: 100 }, // Nilai kuis per organ
  unlockedBadges: ['pembelajar_pemula', 'ahli_kardiologi']
};

export const useProgress = () => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('anatomed_progress');
    return saved ? JSON.parse(saved) : INITIAL_DATA;
  });

  useEffect(() => {
    localStorage.setItem('anatomed_progress', JSON.stringify(progress));
  }, [progress]);

  // Fungsi untuk mencatat modul yang telah dibaca
  const markModuleAsRead = (organId) => {
    setProgress((prev) => {
      if (prev.readModules.includes(organId)) return prev;
      return {
        ...prev,
        readModules: [...prev.readModules, organId]
      };
    });
  };

  // Fungsi untuk mencatat hasil kuis & unlock badge otomatis jika nilai 100
  const saveQuizScore = (organId, score) => {
    setProgress((prev) => {
      const updatedScores = { ...prev.quizScores, [organId]: score };
      const updatedBadges = [...prev.unlockedBadges];

      // Jika nilai kuis 100, buka badge terkait
      if (score === 100) {
        const newBadgeId = `master_${organId}`;
        if (!updatedBadges.includes(newBadgeId)) {
          updatedBadges.push(newBadgeId);
        }
      }

      return {
        ...prev,
        quizScores: updatedScores,
        unlockedBadges: updatedBadges
      };
    });
  };

  // Reset Progres untuk kebutuhan Testing
  const resetProgress = () => {
    localStorage.removeItem('anatomed_progress');
    setProgress(INITIAL_DATA);
  };

  return { progress, markModuleAsRead, saveQuizScore, resetProgress };
};