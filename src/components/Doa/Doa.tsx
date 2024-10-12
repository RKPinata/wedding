import Image from 'next/image';
import Typography from '../Typography/Typography';
import Styles from './Doa.module.css';
import flowerDivider from '../../assets/images/flower-text-divider.png';

const Doa: React.FC = () => {
    return (
        <div className={Styles["doa-container"]}>
            <div className={Styles["doa-items"]}>
                <div className={Styles["flower-divider-top"]}>
                    <Image
                        src={flowerDivider}
                        alt="Flower Divider"
                    />
                </div>
                <div className={Styles["doa-text"]}>
                    <Typography font='Kathya Script'>
                        Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, serta semoga Allah mempersatukan kalian berdua dalam kebaikan
                    </Typography>
                    <Typography font='Kathya Script'>
                        — HR Abu Dawud 2130 —
                    </Typography>
                </div>
                <div className={Styles["flower-divider-bottom"]}>
                    <Image
                        src={flowerDivider}
                        alt="Flower Divider"
                    />
                </div>
            </div>
        </div>
    );
};

export default Doa;
