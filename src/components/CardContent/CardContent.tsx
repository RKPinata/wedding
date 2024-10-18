import Welcome from '../Welcome/Welcome'
import Invitation from '../Invitation/Invitation';
import Styles from './CardContent.module.css'
import Tentative from '../Tentative/Tentative';
import Doa from '../Doa/Doa';
import Wishes from '../Wishes/Wishes';

const CardContent: React.FC = () => {
    return (
        <div className={Styles["card-content-container"]}>
            <div className={Styles["card-content-items"]}>
                <Welcome />
                <Invitation />
                <Tentative />
                <Doa />
                <Wishes />
            </div>
        </div>
    )
}

export default CardContent;