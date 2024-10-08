import Welcome from '../Welcome/Welcome'
import Styles from './CardContent.module.css'

const CardContent: React.FC = () => {
    return (
        <div className={Styles["card-content-container"]}>
            <div className={Styles["card-content-items"]}>
                <Welcome />
            </div>
        </div>
    )
}

export default CardContent;