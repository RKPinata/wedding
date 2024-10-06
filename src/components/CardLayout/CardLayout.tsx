import Arc from "../Arc/Arc";
import styles from "./CardLayout.module.css";
import BottomOverlay from "../BottomOverlay/BottomOverlay";

const Layout: React.FC = () => {
  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["layout-container"]}>
        <div className={styles["layout-area"]}>
          <Arc />
          <BottomOverlay />
        </div>
      </div>
    </div>
  );
};

export default Layout;
