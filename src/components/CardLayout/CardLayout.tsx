import Arc from "../Arc/Arc";
import styles from "./CardLayout.module.css";
import Monogram from "../Monogram/Monogram";
import BottomOverlay from "../BottomOverlay/BottomOverlay";
// import Music from "../Music/Music";

const Layout: React.FC = () => {
  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["layout-container"]}>
        <div className={styles["layout-area"]}>
          <Arc />
          <Monogram />
          <BottomOverlay />
          {/* <Music /> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
