import React, { ReactNode, useEffect, useState } from "react";
import Styles from "./Popup.module.css";

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
    <div className={`${Styles["popup-container"]} ${isOpen ? Styles["open"] : Styles["close"]}`}>
      <div className={Styles["popup-items"]}>
        <div className={Styles["popup-title"]}>
          <h2>{title}</h2>
        </div>
        <div className={Styles["popup-content"]}>{component}</div>
      </div>
    </div>
  );
};

export default Popup;
