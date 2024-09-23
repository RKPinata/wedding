import { ReactNode } from 'react';

export interface TabbarItem {
    title: string;
    logo: ReactNode;
    component?: ReactNode;
}

export interface ContactItem {
    title: string;
    name: string;
    whatsappLogo: ReactNode;
    phoneLogo: ReactNode;
}

export interface MusicItem {
    embeddedLink: string;
}

export interface LocationItem {
    qrCode: string;
    address: string;
    copyButton: ReactNode;
}

export interface GiftItem {
    bankDetails: ReactNode;
    postageDetails: ReactNode;
}

export interface RsvpItem {
    yes: ReactNode;
    no: ReactNode;
}