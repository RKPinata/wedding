import { ReactNode } from 'react';

export interface NavbarItem {
    title: string;
    logo: ReactNode;
}

export interface ContactItem {
    name: string;
    title: string;
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