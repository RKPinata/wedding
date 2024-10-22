import Styles from "./Monogram.module.css";
import Image from 'next/image';
import monogram from "../../assets/images/monogram.png";

const Monogram = () => {
  return (
    <div className={Styles.monogramContainer}>
      <div className={Styles.monogramItems}>
        <div className={Styles.monogram}>
          <Image src={monogram} alt="rose-stalk" />
        </div>
      </div>
    </div>
  );
};

export default Monogram;
