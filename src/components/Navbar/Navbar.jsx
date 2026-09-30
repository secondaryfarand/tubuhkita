import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import styles from './Navbar.module.css';

export default function Navbar({ onNavigateDashboard }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} `}>
      <div className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo} onClick={() => navigate('/')}>
          <img className={styles.logoBadge} src="/favicon.svg" alt="" />
          <span className={styles.logoText}>TubuhKita</span>
        </div>

        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.mobileIcon}><i className="icon fa-solid fa-house-chimney-window"></i></span>
              <span className={styles.navText}>Beranda</span>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink 
              to="/modul" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.mobileIcon}><i className="icon fa-solid fa-book"></i></span>
              <span className={styles.navText}>Modul</span>
            </NavLink>
          </li>


          <li className={styles.navItem}>
            <NavLink 
              to="/anatomi" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.mobileIcon}><i className="icon fa-solid fa-compass"></i></span>
              <span className={styles.navText}>Anatomi</span>
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <NavLink 
              to="/kuis" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.mobileIcon}><i className="icon fa-solid fa-clipboard-question"></i></span>
              <span className={styles.navText}>Kuis</span>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.mobileIcon}><i className="icon fa-solid fa-circle-info"></i></span>
              <span className={styles.navText}>Dashboard</span>
            </NavLink>
          </li>
        </ul>

        <div className={styles.ctaWrapper}>
          <Button 
            variant="primary" 
            onClick={() => {
              if (onNavigateDashboard) onNavigateDashboard();
              navigate('/modul');
            }}
          >
            Mulai Belajar
          </Button>
        </div>
      </div>
    </nav>
  );
}