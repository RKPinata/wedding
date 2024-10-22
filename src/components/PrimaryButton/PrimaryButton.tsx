import React from 'react';
import Styles from './PrimaryButton.module.css';

interface PrimaryButtonProps {
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
  isSelected?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  icon, 
  text, 
  onClick, 
  isSelected = false, 
  type = 'button',
  disabled = false 
}) => {
  return (
    <button 
      className={`${Styles["primary-button"]} ${isSelected ? styles["selected"] : ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && <span className={Styles["icon"]}>{icon}</span>}
      <span className={Styles["text"]}>{text}</span>
    </button>
  );
};

export default PrimaryButton;