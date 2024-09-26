import { CONTACT_DATA } from "@/data/POPUP_DATA";
import { ContactItem } from "@/interfaces/tabbarAndPopupInterface";
import styles from "./ContactPopup.module.css";

const ContactPopup = () => {
    return (
        <div className="contact-pop-container">
            {CONTACT_DATA.map((contactItem: ContactItem, index: number) => (
          <div key={index} className={styles["contact-info"]}>
            <div className={styles["name-and-title"]}>
              <p>{contactItem.name}</p>
              <small>{contactItem.title}</small>
            </div>
            <div className={styles["whatsapp-and-phone"]}>
              {contactItem.whatsappLogo}
              {contactItem.phoneLogo}
            </div>
          </div>
        ))}
        </div>
    )
}

export default ContactPopup;