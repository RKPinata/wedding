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

// Function to open Google Maps with a given address
const openGoogleMaps = (address: string) => {
    const query = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, '_blank');
}

// Function to open Waze with a given address
const openWaze = (address: string) => {
    const query = encodeURIComponent(address);
    const url = `https://waze.com/ul?q=${query}`;
    window.open(url, '_blank');
}

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
                        <button onClick={() => openGoogleMaps(item.address)}>
                            {item.mapsIcon}
                            <p>Maps</p>
                        </button>
                        <button onClick={() => openWaze(item.address)}>
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
