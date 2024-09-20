import Popup from '../Popup/Popup';
import Tabbar from '../Tabbar/Tabbar';
import styles from './BottomOverlay.module.css'


const BottomOverlay = () => {
    return (
        <div className={styles["bottom-overlay-container"]}>
            <Popup />
            <Tabbar />
        </div>
    )
}

export default BottomOverlay;