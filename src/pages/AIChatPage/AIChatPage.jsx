import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; 

import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { sendAnatomyChatMessage } from '../../services/aiService';
import styles from './AIChatPage.module.css';

export default function AIChatPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const chatBoxRef = useRef(null);
    const textareaRef = useRef(null);

    const { topic = 'Anatomi Umum', initialPrompt = '' } = location.state || {};

    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const scrollToBottom = () => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTo({
                top: chatBoxRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }; 
     const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialPrompt) {
      setInputMessage(initialPrompt);
    } else {
      setInputMessage(`Tolong jelaskan secara ringkas mengenai ${topic}.`);
    }
  }, [initialPrompt, topic]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputMessage]);

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userText = inputMessage;
    const updatedMessages = [...messages, { sender: 'user', text: userText }];
    setMessages(updatedMessages);
    setInputMessage('');
    setIsLoading(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    try {
      const aiReply = await sendAnatomyChatMessage(topic, userText);

      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: aiReply }
      ]);
    } catch (error) {
      console.error('Gagal mendapatkan respons AI:', error);
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: 'Maaf, saat ini kuota AI sedang disimpan untuk lomba INVENTION 2026. Silakan coba beberapa saat lagi, jangan lupa like postingan karya kami dengan no peserta INV-WDM-064 di Instagram @invention.udayana yaa ' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <div className={styles.chatContainer}>
        <div>
            <div className={styles.headerSection}>
            <Button className={styles.topBarContainerButton} variant="primary" onClick={handleBack}>
                <i class="fa-solid fa-arrow-left"></i>
            </Button>
                <h1 className={styles.title}>Asisten AI TubuhKita</h1>
                <p className={styles.subtitle}>
                Topik Konteks Aktif: <strong style={{ color: '#38bdf8' }}>{topic}</strong>
                </p>
            </div>
        </div>

        <div className={styles.chatBox} ref={chatBoxRef}>
          <div className={`${styles.message} ${styles.aiMessage}`}>
            Halo! Saya asisten AI TubuhKita. Saya siap membantu kamu mendalami materi <strong>{topic}</strong>. Silakan kirimkan pertanyaan atau tekan enter!
          </div>

          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`${styles.message} ${msg.sender === 'user' ? styles.userMessage : styles.aiMessage}`}
            >
              {msg.sender === 'ai' ? (
                <div className={styles.markdownContent}>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              ) : (
                <div style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className={`${styles.message} ${styles.aiMessage}`} style={{ fontStyle: 'italic', opacity: 0.7 }}>
              Sedang memproses jawaban melalui AI...
            </div>
          )}
        </div>

        <form className={styles.inputForm} onSubmit={handleSendMessage}>
          <textarea 
            ref={textareaRef}
            rows={1}
            className={styles.inputField}
            placeholder="Tanyakan sesuatu mengenai anatomi... (Tekan Shift + Enter untuk baris baru)"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button type="submit" className={styles.sendButton} title="Kirim Pesan" disabled={isLoading}>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}