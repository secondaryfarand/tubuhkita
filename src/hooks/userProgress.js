import { useState, useEffect } from 'react';

const INITIAL_DATA = {
  readModules: ['jantung'], //
  quizScores: { jantung: 100 }, 
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

  const markModuleAsRead = (organId) => {
    setProgress((prev) => {
      if (prev.readModules.includes(organId)) return prev;
      return {
        ...prev,
        readModules: [...prev.readModules, organId]
      };
    });
  };

  const saveQuizScore = (organId, score) => {
    setProgress((prev) => {
      const updatedScores = { ...prev.quizScores, [organId]: score };
      const updatedBadges = [...prev.unlockedBadges];

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

  const resetProgress = () => {
    localStorage.removeItem('anatomed_progress');
    setProgress(INITIAL_DATA);
  };

  return { progress, markModuleAsRead, saveQuizScore, resetProgress };
};