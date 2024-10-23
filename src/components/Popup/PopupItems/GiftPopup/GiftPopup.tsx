import Styles from './GiftPopup.module.css'
import BankDetails from './GiftPopupItems/BankDetails/BankDetails';
import Mailing from './GiftPopupItems/Mailing/Mailing';
import CopyableDiv from '@/components/CopyableDiv/CopyableDiv';

const GiftPopup: React.FC = () => {
    return (
        <div className={Styles["gift-popup-container"]}>
            <div className="gift-popup-items">
                <CopyableDiv>
                    <Mailing />
                </CopyableDiv>
                <CopyableDiv>
                    <BankDetails />
                </CopyableDiv>
            </div>
        </div>
    )
}

export default GiftPopup;