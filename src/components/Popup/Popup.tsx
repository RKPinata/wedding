import React, { ReactNode, useEffect, useState } from "react";
import styles from "./Popup.module.css";

const Popup: React.FC<{ title: string; component: ReactNode; isOpen: boolean }> = ({ title, component, isOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 400);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  return (
    <div className={`${styles["popup-container"]} ${isOpen ? styles["open"] : styles["close"]}`}>
      <div className={styles["popup-items"]}>
        <div className={styles["popup-title"]}>
          <h2>{title}</h2>
        </div>
        <div className={styles["popup-content"]}>{component}</div>
      </div>
    </div>
  );
};

export default Popup;
