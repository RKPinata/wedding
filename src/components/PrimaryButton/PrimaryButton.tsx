import React from 'react';
import styles from './PrimaryButton.module.css';

interface PrimaryButtonProps {
  icon?: React.ReactNode;
  text: string;
  onClick: () => void;
  isSelected?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ icon, text, onClick, isSelected = false }) => {
  return (
    <button 
      className={`${styles["primary-button"]} ${isSelected ? styles["selected"] : ''}`}
      onClick={onClick}
    >
      {icon && <span className={styles["icon"]}>{icon}</span>}
      <span className={styles["text"]}>{text}</span>
    </button>
  );
};

export default PrimaryButton;