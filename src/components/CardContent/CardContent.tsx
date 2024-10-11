import Welcome from '../Welcome/Welcome'
import Invitation from '../Invitation/Invitation';
import Styles from './CardContent.module.css'
import Tentative from '../Tentative/Tentative';

const CardContent: React.FC = () => {
    return (
        <div className={Styles["card-content-container"]}>
            <div className={Styles["card-content-items"]}>
                <Welcome />
                <Invitation />
                <Tentative />
            </div>
        </div>
    )
}

export default CardContent;