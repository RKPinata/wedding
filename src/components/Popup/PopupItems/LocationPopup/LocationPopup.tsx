import { LocationItem } from '@/interfaces/tabbarAndPopupInterface';
import styles from './LocationPopup.module.css';
import { faWaze } from '@fortawesome/free-brands-svg-icons';
import { GoogleLogo } from '@phosphor-icons/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LOCATION_DATA: LocationItem[] = [
    {
        address: "298, Jln Haji Manan, Taman Lian Seng, 86000 Kluang, Johor",
        mapsIcon: <GoogleLogo  size={20} />,
        wazeIcon: <FontAwesomeIcon icon={faWaze} size="lg"/>,
    }
];

const LocationPopup: React.FC = () => {
    return (
        <div className={styles["location-popup-container"]}>
            {LOCATION_DATA.map((item, index) => (
                <div
                    className={styles["location-popup-items"]}
                    key={index}>
                    <p>{item.address}</p>
                    <div className={styles["location-popup-buttons"]}>
                        <button>
                            {item.mapsIcon}
                            <p>Maps</p>
                        </button>
                        <button>
                            {item.wazeIcon}
                            <p>Waze</p>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LocationPopup;
