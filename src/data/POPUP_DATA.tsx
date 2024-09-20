import { ContactItem } from "@/interfaces/navbarAndPopupInterface";
import { Phone, WhatsappLogo } from "@phosphor-icons/react";

export const CONTACT_DATA: ContactItem[] = [
  {
    name: "Teuku Afrizal",
    title: "Bapa Lelaki",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
  },
  {
    name: "Wan Zumusni",
    title: "Ibu Lelaki",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
  },
  {
    name: "Malek Bin Saif",
    title: "Bapa Perempuan",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
  },
  {
    name: "Juraidah",
    title: "Ibu Perempuan",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
  },
];
