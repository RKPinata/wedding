import Typography from '../Typography/Typography';
import Styles from './Tentative.module.css';

const Tentative: React.FC = () => {
    return (
        <div className={Styles["tentative-container"]}>
            <div className={Styles["tentative-items"]}>
                <div className={Styles["tentative-title"]}>
                    <Typography
                        fontSize='1.2rem' 
                    >ATURCARA MAJLIS</Typography>
                </div>
                <div className={Styles["tentative-list"]}>
                    <div className={Styles["kehadiran-tetamu"]}>
                        <p>Kehadiran Tetamu</p>
                        <p>11.00 pagi</p>
                    </div>
                    <div className={Styles["ketibaan-pengantin"]}>
                        <p>Ketibaan Pengantin</p>
                        <p>12:00 tengah hari</p>
                    </div>
                    <div className={Styles["majlis-berakhir"]}>
                        <p>Majlis Berakhir</p>
                        <p>4:00 petang</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tentative;