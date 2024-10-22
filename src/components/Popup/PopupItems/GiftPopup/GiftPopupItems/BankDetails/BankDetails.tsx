import CopyableP from "@/components/CopyableP/CopyableP";
import Image, { StaticImageData } from 'next/image';
import MaybankLogo from '@/assets/images/maybank_logo.png';
import Styles from './BankDetails.module.css'

interface BankDetails {
    bankLogo: StaticImageData,
    bankName: string,
    bearerName: string,
    bankDetails: React.FC<{ copyableText: string }>
}

const BANK_DETAILS_DATA: BankDetails = {
    bankLogo: MaybankLogo,
    bankName: 'Maybank',
    bearerName: 'Juraidah Binti A Rahman',
    bankDetails: CopyableP
}

const BankDetails: React.FC = () => {
    const { bankLogo, bankName, bearerName, bankDetails: BankDetailsComponent } = BANK_DETAILS_DATA;

    return (
        <div className={Styles["bank-details-items"]}>
            <p
            style={{ display: 'flex', alignItems: 'center' }}
            >
                <Image
                    src={bankLogo}
                    alt={bankName}
                    height={20} 
                />
                {bankName}
            </p>
            <p>{bearerName}</p>
            <BankDetailsComponent copyableText="bank details mama" />
        </div>
    );
}

export default BankDetails;
