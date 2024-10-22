import Welcome from '../Welcome/Welcome';
import Invitation from '../Invitation/Invitation';
import Styles from './CardContent.module.css';
import Tentative from '../Tentative/Tentative';
import Doa from '../Doa/Doa';
import Wishes from '../Wishes/Wishes';
import Music from '../Music/Music';

interface CardContentProps {
  isMusicPlaying: boolean;  // Accept the music playing state as a prop
}

const CardContent: React.FC<CardContentProps> = ({ isMusicPlaying }) => {
    return (
        <div className={Styles["card-content-container"]}>
            <div className={Styles["card-content-items"]}>
                <Welcome />
                <Invitation />
                <Tentative />
                <Doa />
                <Wishes />
                {isMusicPlaying && <Music />} {/* Only render Music if isMusicPlaying is true */}
            </div>
        </div>
    );
}

export default CardContent;
