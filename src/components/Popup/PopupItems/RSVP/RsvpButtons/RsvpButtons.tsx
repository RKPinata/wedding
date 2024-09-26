import styles from './RsvpButtons.module.css';

const RsvpButtons: React.FC<{ icon: React.ReactNode; status: string }> = ({ icon, status }) => {
    return (
        <div className={styles["rsvp-container"]}>
            <button className={styles["rsvp-buttons"]}>
                {icon}
                <p>{status}</p>
            </button>
        </div>
    );
};

export default RsvpButtons;
