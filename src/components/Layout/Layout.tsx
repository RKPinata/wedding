import Arc from "../Arc/Arc";
import styles from "./Layout.module.css";
import Monogram from "../Monogram/Monogram";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["layout-container"]}>
        <div className={styles["layout-area"]}>
            
          {/* make this a component */}
          <div>
            <Arc />
            <Monogram />
          </div>

          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
