import { ReactNode } from "react";
import styles from "./Popup.module.css";

const Popup: React.FC<{ title: string | null, component: ReactNode }> = ({ title, component }) => {
  return (
    <div className={styles["popup-container"]}>
      <div className={styles["popup-items"]}>
        <div className={styles["popup-title"]}>
          <h2>{title ? title : "No title selected"}</h2>
        </div>
        <div className={styles["popup-content"]}>
          {component ? component : <p>No component to display</p>}
        </div>
      </div>
    </div>
  );
};

export default Popup;
