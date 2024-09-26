import { RsvpItem } from "@/interfaces/tabbarAndPopupInterface";
import { Check, X } from "@phosphor-icons/react";
import RsvpButtons from "./RsvpButtons/RsvpButtons";
import styles from "./Rsvp.module.css";


const RSVP_DATA: RsvpItem[] = [
    {
        icon: <Check size={20} />,
        status: "Attending",
    },
    {
        icon: <X size={20} />,
        status: "Not Attending",
    },
];

const Rsvp: React.FC = () => {
    return (
        <div className={styles["rsvp-container"]}>
            <div className={styles["rsvp-items"]}>
                {RSVP_DATA.map((item, index) => (
                    <RsvpButtons key={index} icon={item.icon} status={item.status} />
                ))}
            </div>
        </div>
    );
};

export default Rsvp;
