import styles from "./Monogram.module.css";
import Image from 'next/image';
import monogram from "../../assets/images/monogram.png";

const Monogram = () => {
  return (
    <div className={styles.monogramContainer}>
      <div className={styles.monogramItems}>
        <div className={styles.separator}>
          <Image src={monogram} alt="rose-stalk" />
        </div>
      </div>
    </div>
  );
};

export default Monogram;
