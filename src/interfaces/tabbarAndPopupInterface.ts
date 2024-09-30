import { ReactNode } from 'react';

export interface TabbarItem {
    title: string;
    logo: ReactNode;
    component?: ReactNode;
}

export interface ContactItem {
    name: string;
    relation: string;
    whatsappLogo: ReactNode;
    phoneLogo: ReactNode;
    phoneNumber: string;
}

export interface MusicItem {
    embeddedLink: string;
}

export interface LocationItem {
    address: string;
    mapsIcon: ReactNode;
    wazeIcon: ReactNode;
}

export interface GiftItem {
    bankDetails: ReactNode;
    postageDetails: ReactNode;
}

export interface RsvpItem {
    icon: ReactNode;
    status: string;
}