import Arc from "../Arc/Arc";
import styles from "./CardLayout.module.css";
import Monogram from "../Monogram/Monogram";
import BottomOverlay from "../BottomOverlay/BottomOverlay";

const Layout = () => {
  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["layout-container"]}>
        <div className={styles["layout-area"]}>
          <Arc />
          <Monogram />
          <BottomOverlay />
        </div>
      </div>
    </div>
  );
};

export default Layout;
