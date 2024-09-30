import { ContactItem } from "@/interfaces/tabbarAndPopupInterface";
import { Phone, WhatsappLogo } from "@phosphor-icons/react";

export const CONTACT_DATA: ContactItem[] = [
  {
    name: "Malek",
    relation: "Ayah",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
    phoneNumber: "+60137345774"
  },  
  {
    name: "Juraidah",
    relation: "Ibu",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
    phoneNumber: "+60103827446"
  },
  {
    name: "Hakim",
    relation: "Abang",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
    phoneNumber: "+60143113590"
  },
  {
    name: "Fatin",
    relation: "Kakak",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
    phoneNumber: "+60137338167"
  }
];
