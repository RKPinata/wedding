import React, { ReactNode, useState } from 'react';
import Popup from '../Popup/Popup';
import Tabbar from '../Tabbar/Tabbar';
import styles from './BottomOverlay.module.css';

const BottomOverlay = () => {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<ReactNode | null>(null);

  const handleSelect = (title: string, component: ReactNode) => {
    setSelectedTitle(title);
    setSelectedComponent(component);
  };

  return (
    <div className={styles["bottom-overlay-container"]}>
      <Popup title={selectedTitle} component={selectedComponent} />
      <Tabbar onSelect={handleSelect} />
    </div>
  );
};

export default BottomOverlay;
