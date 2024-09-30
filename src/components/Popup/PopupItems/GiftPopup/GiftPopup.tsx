import styles from './GiftPopup.module.css'
import BankDetails from './GiftPopupItems/BankDetails/BankDetails';
import Mailing from './GiftPopupItems/Mailing/Mailing';

const GiftPopup: React.FC = () => {
    return (
        <div className={styles["gift-popup-container"]}>
            <div className="gift-popup-items">
                <div className={styles["bank-details-container"]}>
                    <Mailing />
                </div>
                <div className={styles["mailing-address-container"]}>
                    <BankDetails />
                </div>
            </div>
        </div>
    )
}

export default GiftPopup;