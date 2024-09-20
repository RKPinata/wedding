import { CONTACT_DATA } from "@/data/POPUP_DATA";
import styles from "./Popup.module.css";
import { ContactItem } from "@/interfaces/navbarAndPopupInterface";

const Popup = () => {
  return (
    <div className={styles["popup-container"]}>
      <div className={styles["popup-items"]}>
        <div className={styles["popup-title"]}>
          <h2>Contact</h2>
        </div>
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
    </div>
  );
};

export default Popup;
