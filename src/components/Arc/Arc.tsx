import Image from 'next/image';
import Wisteria from "../../assets/images/wisteria-2.png";
import Styles from "./Arc.module.css";

const Arc = () => {
  return (
    <div className={Styles.arc}>
      <Image src={Wisteria} alt="Wisteria" />
    </div>
  );
};

export default Arc;
