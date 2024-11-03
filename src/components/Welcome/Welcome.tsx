import Styles from './Welcome.module.css';
import Typography from '../Typography/Typography';
import React from 'react';

interface WelcomeData {
    eventType: string;
    name1: string;
    name2: string;
    date: string;
    day: string;
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    tagline?: string;
}

const WELCOME_DATA: WelcomeData[] = [
    {
        eventType: 'WALIMATULURUS',
        name1: 'I Z Z A H',
        name2: 'R Y A N',
        date: '11.01.2025',
        day: 'SABTU',
        addressLine1: "DEWAN IBU'KU ALIMAH",
        addressLine2: 'TAMAN KLUANG PERDANA',
        addressLine3: 'KLUANG, JOHOR',
        tagline: '#RyanIzzInLove'
    }
]

const Welcome: React.FC = () => {
    return (
        <div className={Styles['welcome-container']}>
            <div className={Styles['welcome-items']}>
                {WELCOME_DATA.map((welcomeItem: WelcomeData) => (
                    <React.Fragment key={welcomeItem.eventType}>
                        <div className="event-type">
                            <Typography>
                                {welcomeItem.eventType}
                            </Typography>
                        </div>
                        <div className="name-one-and-name-two">
                            <Typography variant='p' fontSize='3rem'>
                                {welcomeItem.name1}
                            </Typography>
                            <Typography variant="p" font="Meie Script" color="black" fontSize='2rem'>
                                and
                            </Typography>
                            <Typography variant='p' fontSize='3rem'>
                                {welcomeItem.name2}
                            </Typography>
                            <div className="date">
                                <Typography fontSize='2rem'>
                                    {welcomeItem.date}
                                </Typography>
                            </div>
                            <div className={Styles["day"]}>
                                <Typography>
                                    {welcomeItem.day}
                                </Typography>
                            </div>
                            <div className={Styles["address"]}>
                                <Typography>
                                    {welcomeItem.addressLine1}
                                </Typography>
                                <Typography>
                                    {welcomeItem.addressLine2}
                                </Typography>
                                <Typography>
                                    {welcomeItem.addressLine3}
                                </Typography>
                            </div>
                            <div className="tagline">
                                <Typography>
                                    {welcomeItem.tagline}
                                </Typography>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Welcome;
