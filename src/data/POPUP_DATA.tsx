import { ContactItem } from "@/interfaces/tabbarAndPopupInterface";
import { Phone, WhatsappLogo } from "@phosphor-icons/react";

export const CONTACT_DATA: ContactItem[] = [
  {
    name: "Malek",
    title: "Ayah",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
  },  
  {
    name: "Juraidah",
    title: "Ibu",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
  },
  {
    name: "Hakim",
    title: "Abang",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
  },
  {
    name: "Fatin",
    title: "Kakak",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
  }
];
