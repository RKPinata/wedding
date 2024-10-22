import Styles from './GiftPopup.module.css'
import BankDetails from './GiftPopupItems/BankDetails/BankDetails';
import Mailing from './GiftPopupItems/Mailing/Mailing';

const GiftPopup: React.FC = () => {
    return (
        <div className={Styles["gift-popup-container"]}>
            <div className="gift-popup-items">
                <div className={Styles["bank-details-container"]}>
                    <Mailing />
                </div>
                <div className={Styles["mailing-address-container"]}>
                    <BankDetails />
                </div>
            </div>
        </div>
    )
}

export default GiftPopup;