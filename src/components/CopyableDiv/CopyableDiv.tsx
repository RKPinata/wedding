import { ClipboardText } from '@phosphor-icons/react';
import Styles from './CopyableDiv.module.css';

interface CopyableDivType {
    children: React.ReactNode;
}

const CopyableDiv: React.FC<CopyableDivType> = ({ children }) => {
    return (
        <div className={Styles["copyable-container"]}>
            <ClipboardText size={16} />
            {children}
        </div>
    );
}

export default CopyableDiv;
