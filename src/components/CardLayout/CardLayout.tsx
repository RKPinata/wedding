import Arc from "../Arc/Arc";
import Styles from "./CardLayout.module.css";
import BottomOverlay from "../BottomOverlay/BottomOverlay";
import CardContent from "../CardContent/CardContent";
import monogram from '@/assets/images/monogram.png'
import Image from "next/image";
import Typography from "../Typography/Typography";

const CardLayout: React.FC = () => {
  return (
    <div className={Styles["page-wrapper"]}>
      <div className={Styles["layout-container"]}>
        <div className={Styles["overlay"]}>
          <div className={Styles["overlay-image"]}>
            <button>
              <Image src={monogram} alt={"name-monogram"}/>            
            </button>
          </div>
          <div className={Styles["overlay-text"]}>
            <Typography>
              Click to open
            </Typography>
          </div>
        </div>
        <div className={Styles["layout-area"]}>
          <Arc />
          <CardContent />       
          <BottomOverlay />
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
