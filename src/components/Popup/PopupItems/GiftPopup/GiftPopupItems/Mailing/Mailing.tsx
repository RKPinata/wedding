import styles from './Mailing.module.css';

interface MailingInfo {
    name?: string;
    phoneNumber?: string;
    addLineOne?: string;
    addLineTwo?: string;
    addLineThree?: string;
}

const MAILING_DATA: MailingInfo[] = [
    {
        name: "Nurul Izzah Binti Malek",
        phoneNumber: "011 21950480",
        addLineOne: "No. 34, Jalan Kerisi",
        addLineTwo: "Taman Indah Jaya",
        addLineThree: "86000 Kluang Johor"
    }
];

const Mailing: React.FC = () => {

    const handleCopy = (item: MailingInfo) => {
        const textToCopy = `${item.name}\n${item.phoneNumber}\n${item.addLineOne}\n${item.addLineTwo}\n${item.addLineThree}`;
        
        navigator.clipboard.writeText(textToCopy);
    };
    

    return (
        <>
            {
                MAILING_DATA.map((item, index) => (
                    <div 
                        className={styles["mailing-text"]}
                        key={index}
                        onClick={() => handleCopy(item)}
                        style={{ cursor: 'pointer' }}
                    >
                        <p>{item.name}</p>
                        <p>{item.phoneNumber}</p>
                        <p>{item.addLineOne}</p>
                        <p>{item.addLineTwo}</p>
                        <p>{item.addLineThree}</p>
                    </div>
                ))
            }
        </>
    );
}

export default Mailing;
