import { LocationItem } from '@/interfaces/tabbarAndPopupInterface';
import styles from './LocationPopup.module.css';
import { faWaze } from '@fortawesome/free-brands-svg-icons';
import { GoogleLogo } from '@phosphor-icons/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CopyableP from '@/components/CopyableP/CopyableP';

const LOCATION_DATA: LocationItem[] = [
    {
        address: "Dewan Ibu'ku Alinah Taman Kluang Perdana, Kluang, Johor",
        mapsIcon: <GoogleLogo size={20} />,
        wazeIcon: <FontAwesomeIcon icon={faWaze} size="lg" />,
    }
];

const LocationPopup: React.FC = () => {
    return (
        <div className={styles["location-popup-container"]}>
            {LOCATION_DATA.map((item, index) => (
                <div
                    className={styles["location-popup-items"]}
                    key={index}>
                    <div className={styles["location-address"]}>
                        <CopyableP copyableText={item.address} />
                    </div>
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
