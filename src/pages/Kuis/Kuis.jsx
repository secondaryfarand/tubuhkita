import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { getRandomQuestions } from '../../data/quizData';
import styles from './Kuis.module.css';

const QUESTION_TIME_LIMIT = 30;

export default function Kuis() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [isCompleted, setIsCompleted] = useState(false);

  const headerRef = useRef(null);
  const quizCardRef = useRef(null);
  const qContentRef = useRef(null);
  const resultRef = useRef(null);

  const startNewQuiz = () => {
    setQuestions(getRandomQuestions(5));
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setCorrectAnswers(0);
    setTimeLeft(QUESTION_TIME_LIMIT);
    setIsCompleted(false);
  };

  useEffect(() => {
    startNewQuiz();
  }, []);

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
    }
  }, [isCompleted]);

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
        <header ref={headerRef} className={styles.headerSection}>
          <h1 className={styles.pageTitle}>Kuis Anatomi</h1>
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
              <p className={styles.resultSubtitle}>Berikut adalah ringkasan hasil evaluasi Anda:</p>
              
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

              <button className={styles.restartBtn} onClick={startNewQuiz}>
                <i className="fa-solid fa-rotate-right"></i>
                <span>Main Lagi</span>
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}