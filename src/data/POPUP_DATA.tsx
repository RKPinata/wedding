import { ContactItem } from "@/interfaces/tabbarAndPopupInterface";
import { Phone, WhatsappLogo } from "@phosphor-icons/react";

export const CONTACT_DATA: ContactItem[] = [
  {
    name: "Fatin",
    title: "Kakak Perempuan",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
  },
  {
    name: "Wan Zumusni",
    title: "Ibu Lelaki",
    whatsappLogo: <WhatsappLogo size={28} />,
    phoneLogo: <Phone size={28} />,
  }
];
