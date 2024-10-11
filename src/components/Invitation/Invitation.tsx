import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Styles from './Invitation.module.css';
import bismillahCalligraphy from '@/assets/images/bismillah.png'
import Typography from '../Typography/Typography';

interface InvitationDataType {
  bismillah: StaticImageData;
  parentName1: string;
  parentName2: string;
  greetingLine1: string;
  greetingLine2?: string;
  greetingLine3?: string;
  greetingLine4?: string;
  name1: string;
  name2: string;
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  addressLine4?: string;
  date: string;
  time: string;
}

const INVITATION_DATA: InvitationDataType[] = [
  {
    bismillah: bismillahCalligraphy,
    parentName1: 'MALEK BIN HJ SAIF',
    parentName2: 'JURAIDAH BINTI A RAHMAN',
    greetingLine1: 'Assalamualaikum wbt & Salam Sejahtera',
    greetingLine2: 'Dengan penuh rasa kesyukuran, kami menjemput',
    greetingLine3: "Dato' | Datin | Tuan | Puan | Encik | Cik",
    greetingLine4: 'ke majlis perkahwinan puteri kami yang dikasihi',
    name1: 'Nurul Izzah Binti Malek',
    name2: 'Ryan Iskandar Bin Afrizal Anwar ',
    addressLine1: "Dewan Ibu'ku Alimah,",
    addressLine2: 'No. 43, Jalan Perdana,',
    addressLine3: 'Jalan Lingkaran Tengah',
    addressLine4: 'Taman Kluang Perdana,',
    date: 'Sabtu, 11 Januari 2025',
    time: '11:00AM - 4:00PM',
  }
]

const Invitation: React.FC = () => {
  const invitationData = INVITATION_DATA[0]; // Assuming we're using the first (and only) item in the array

  return (
    <div className={Styles['invitation-container']}>
      <div className={Styles['invitation-items']}>
        <div className={Styles['bismillah']}>
          <Image src={invitationData.bismillah} alt="bismillah calligraphy" />
        </div>
        <div className={Styles['greeting']}>
          <p>{invitationData.greetingLine1}</p>
        </div>
        <div className={Styles['parent-names']}>
          <p>{invitationData.parentName1}</p>
          <p>&</p>
          <p>{invitationData.parentName2}</p>
        </div>
        <div className={Styles['invitation-text']}>
          {invitationData.greetingLine2 && <p>{invitationData.greetingLine2}</p>}
          {invitationData.greetingLine3 && <p>{invitationData.greetingLine3}</p>}
          {invitationData.greetingLine4 && <p>{invitationData.greetingLine4}</p>}
        </div>
        <div className={Styles['couple-name']}>
          <Typography font='BP Black White'>{invitationData.name1}</Typography>
          <Typography>dengan pasangannya</Typography>
          <Typography font='BP Black White'>{invitationData.name2}</Typography>
        </div>
        <div className={Styles['location-date-time']}>
          <div className={Styles["location"]}>
            <h3>Tempat</h3>
            <p>{invitationData.addressLine1}</p>
            {invitationData.addressLine2 && <p>{invitationData.addressLine2}</p>}
            {invitationData.addressLine3 && <p>{invitationData.addressLine3}</p>}
            {invitationData.addressLine4 && <p>{invitationData.addressLine4}</p>}
          </div>
          <div className={Styles["date"]}>
            <h3>Tarikh</h3>
            <p>{invitationData.date}</p>
          </div>
          <div className={Styles["time"]}>
            <h3>Masa</h3>
            <p>{invitationData.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;