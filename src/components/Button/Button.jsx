import React from 'react';
import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', onClick, type = 'button', className = '' }) {
  return (
    <button type={type} className={`${styles.btn} ${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}