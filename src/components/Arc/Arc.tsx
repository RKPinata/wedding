import Image from 'next/image';
import Wisteria from "../../assets/images/wisteria-2.png";
import styles from "./Arc.module.css";

const Arc = () => {
  return (
    <div className={styles.arc}>
      <Image src={Wisteria} alt="Wisteria" />
    </div>
  );
};

export default Arc;
