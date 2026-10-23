import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProgress } from '../../hooks/userProgress.js';
import { getQuestionsByOrgan, getRandomQuestions } from '../../data/quizData';
import gsap from 'gsap';
import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './Kuis.module.css';

const QUESTION_TIME_LIMIT = 30;

export default function Kuis() {
  const { organId } = useParams(); 
  const navigate = useNavigate();
  const { saveQuizScore } = useProgress(); 

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasSavedScore, setHasSavedScore] = useState(false); 

  const headerRef = useRef(null);
  const quizCardRef = useRef(null);
  const qContentRef = useRef(null);
  const resultRef = useRef(null);

  const startNewQuiz = () => {
    const loadedQuestions = organId ? getQuestionsByOrgan(organId, 5) : getRandomQuestions(5);
    
    setQuestions(loadedQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setCorrectAnswers(0);
    setTimeLeft(QUESTION_TIME_LIMIT);
    setIsCompleted(false);
    setHasSavedScore(false);
  };

  useEffect(() => {
    startNewQuiz();
  }, [organId]);

  // Efek Animasi GSAP
  useEffect(() => {
    if (questions.length > 0) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
      gsap.fromTo(
        quizCardRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' }
      );
    }
  }, [questions.length === 0]);

  useEffect(() => {
    if (!isCompleted && questions.length > 0) {
      gsap.fromTo(
        qContentRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [currentIndex, isCompleted]);

  useEffect(() => {
    if (isCompleted) {
      gsap.fromTo(
        resultRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' }
      );

      if (organId && !hasSavedScore) {
        const finalPercentage = Math.round((correctAnswers / questions.length) * 100);
        saveQuizScore(organId, finalPercentage);
        setHasSavedScore(true);
      }
    }
  }, [isCompleted, organId, correctAnswers, questions.length, hasSavedScore, saveQuizScore]);

  useEffect(() => {
    if (isCompleted || isAnswered || questions.length === 0) return;

    if (timeLeft === 0) {
      setIsAnswered(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, isCompleted, questions.length]);

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const currentQ = questions[currentIndex];
    if (index === currentQ.answerIndex) {
      setScore((prev) => prev + 20);
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/kuis');
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(QUESTION_TIME_LIMIT);
    } else {
      setIsCompleted(true);
    }
  };

  if (questions.length === 0) {
    return null;
  }

  const currentQ = questions[currentIndex];

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        <div className={styles.backButtonWrapper}>
          <Button 
            className={styles.topBarContainerButton} 
            variant="primary" 
            onClick={handleBack}
            title="Kembali"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </Button>
        </div>
        <header ref={headerRef} className={styles.headerSection}>
          <h1 className={styles.pageTitle}>
            Kuis Anatomi {organId ? `: ${organId.toUpperCase()}` : ''}
          </h1>
          <p className={styles.pageSubtitle}>
            Uji pemahaman dan pengetahuan anatomi tubuh manusia Anda melalui kuis interaktif ini.
          </p>

        </header>

        <section ref={quizCardRef} className={styles.quizCard}>
          {!isCompleted ? (
            <div ref={qContentRef}>
              <div className={styles.quizTop}>
                <span className={styles.qProgress}>
                  Soal {currentIndex + 1} dari {questions.length}
                </span>
                
                <div className={`${styles.timerBox} ${timeLeft <= 5 ? styles.timerWarning : ''}`}>
                  <i className="fa-solid fa-clock"></i>
                  <span>{timeLeft}s</span>
                </div>
              </div>

              <p className={styles.qText}>{currentQ.question}</p>

              <div className={styles.qOptions}>
                {currentQ.options.map((opt, idx) => {
                  let btnClass = styles.optionBtn;
                  if (isAnswered) {
                    if (idx === currentQ.answerIndex) {
                      btnClass += ` ${styles.correct}`;
                    } else if (idx === selectedOption) {
                      btnClass += ` ${styles.wrong}`;
                    }
                  } else if (selectedOption === idx) {
                    btnClass += ` ${styles.selected}`;
                  }

                  return (
                    <button
                      key={idx}
                      className={btnClass}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                    >
                      <span className={styles.optLetter}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className={styles.optText}>{opt}</span>
                    </button>
                  );
                })}
              </div>

              <div className={styles.quizActions}>
                {isAnswered && (
                  <button className={styles.nextBtn} onClick={handleNext}>
                    <span>{currentIndex + 1 === questions.length ? 'Lihat Hasil' : 'Lanjut'}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div ref={resultRef} className={styles.resultView}>
              <div className={styles.trophyWrapper}>
                <i className="fa-solid fa-trophy"></i>
              </div>
              <h2 className={styles.resultTitle}>Kuis Selesai</h2>
              <p className={styles.resultSubtitle}>Progres dan skor Anda telah otomatis tersimpan ke Dashboard!</p>
              
              <div className={styles.resultBoard}>
                <div className={styles.resultBox}>
                  <span className={styles.resultLabel}>Total Skor</span>
                  <h3 className={styles.scoreValue}>{score}</h3>
                </div>
                <div className={styles.resultBox}>
                  <span className={styles.resultLabel}>Benar</span>
                  <h3 className={styles.correctValue}>
                    <i className="fa-solid fa-circle-check"></i> {correctAnswers}
                  </h3>
                </div>
                <div className={styles.resultBox}>
                  <span className={styles.resultLabel}>Salah / Waktu Habis</span>
                  <h3 className={styles.wrongValue}>
                    <i className="fa-solid fa-circle-xmark"></i> {questions.length - correctAnswers}
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'center' }}>
                <button className={styles.restartBtn} onClick={startNewQuiz}>
                  <i className="fa-solid fa-rotate-right"></i>
                  <span>Ulangi Kuis</span>
                </button>
                <button className={styles.restartBtn} onClick={() => navigate('/dashboard')} style={{ background: '#0284c7' }}>
                  <i className="fa-solid fa-chart-line"></i>
                  <span>Lihat Dashboard</span>
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}