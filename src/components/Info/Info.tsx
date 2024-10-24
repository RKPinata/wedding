import Styles from './Info.module.css'
interface InfoDataType {
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    addressLine4?: string;
    date: string;
    time: string;
}
const INFO_DATA: InfoDataType[] = [
    {
        addressLine1: "Dewan Ibu'ku Alimah,",
        addressLine2: 'No. 43, Jalan Perdana,',
        addressLine3: 'Jalan Lingkaran Tengah',
        addressLine4: 'Taman Kluang Perdana,',
        date: 'Sabtu, 11 Januari 2025',
        time: '11:00 Pagi - 4:00 Petang'
    }
]
const Info: React.FC = () => {
    const infoData = INFO_DATA[0];
    return (
        <div className={Styles['info-container']}>
        <div className={Styles["location"]}>
          <h3>Tempat</h3>
          <p>{infoData.addressLine1}</p>
          {infoData.addressLine2 && <p>{infoData.addressLine2}</p>}
          {infoData.addressLine3 && <p>{infoData.addressLine3}</p>}
          {infoData.addressLine4 && <p>{infoData.addressLine4}</p>}
        </div>
        <div className={Styles["date"]}>
          <h3>Tarikh</h3>
          <p>{infoData.date}</p>
        </div>
        <div className={Styles["time"]}>
          <h3>Masa</h3>
          <p>{infoData.time}</p>
        </div>
      </div>
    )
}
export default Info;