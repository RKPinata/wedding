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
}

const INVITATION_DATA: InvitationDataType[] = [
  {
    bismillah: bismillahCalligraphy,
    parentName1: 'EN MALEK BIN HJ SAIF',
    parentName2: 'PN JURAIDAH BINTI A RAHMAN',
    greetingLine1: 'Assalamualaikum wbt & Salam Sejahtera',
    greetingLine2: 'Dengan penuh rasa kesyukuran, kami menjemput',
    greetingLine3: "Dato' | Datin | Tuan | Puan | Encik | Cik",
    greetingLine4: 'ke majlis perkahwinan puteri kami yang dikasihi',
    name1: 'Nurul Izzah Binti Malek',
    name2: 'Ryan Iskandar Bin Afrizal Anwar '
  }
]

const Invitation: React.FC = () => {
  const invitationData = INVITATION_DATA[0];

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
          <Typography className={Styles["dengan-pasangannya"]}>dengan pasangannya</Typography>
          <Typography font='BP Black White'>{invitationData.name2}</Typography>
        </div>
      </div>
    </div>
  );
};

export default Invitation;