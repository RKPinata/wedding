import style from './SegmentOne.module.css'
import Monogram from '../Monogram/Monogram';

const SegmentOne = () => {
    return (
        <div className={style.segmentOneContainer}>
            <Monogram />
            <div 
            className={style.invitationContainer}>
                <div className={style.invitationText}></div>
                <p>YOU ARE INVITED</p>
                <p>to the wedding of</p>
                
            </div>
        </div>
    )
}

export default SegmentOne;