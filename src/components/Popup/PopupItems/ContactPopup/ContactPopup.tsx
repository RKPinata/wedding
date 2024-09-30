import styles from "./ContactPopup.module.css";
import { WhatsappLogo, Phone } from "@phosphor-icons/react";
import { ContactItem } from "@/interfaces/tabbarAndPopupInterface";

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


const ContactPopup = () => {
  return (
    <div className={styles["contact-info"]}>
      {CONTACT_DATA.map((contact, index) => (
        <div key={index} className={styles["contact-row"]}>
          <div className={styles["contact-name-and-relation"]}>
            <p>{contact.name}</p>
            <p>{contact.relation}</p>
          </div>
          <div className={styles.iconGroup}>
            <a
              href={`https://wa.me/${contact.phoneNumber.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo size={28} />
            </a>
            <a href={`tel:${contact.phoneNumber}`}>
              <Phone size={28} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactPopup;