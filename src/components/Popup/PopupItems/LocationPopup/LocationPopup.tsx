import { LocationItem } from '@/interfaces/tabbarAndPopupInterface';
import Styles from './LocationPopup.module.css';
import { faWaze } from '@fortawesome/free-brands-svg-icons';
import { ClipboardText, GoogleLogo } from '@phosphor-icons/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CopyableP from '@/components/CopyableP/CopyableP';
import CopyableDiv from '@/components/CopyableDiv/CopyableDiv';

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
        <div className={Styles["location-popup-container"]}>
            {LOCATION_DATA.map((item, index) => (
                <div
                    className={Styles["location-popup-items"]}
                    key={index}>
                    <CopyableDiv>
                        <CopyableP copyableText={item.address} />
                    </CopyableDiv>
                    <div className={Styles["location-popup-buttons"]}>
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
