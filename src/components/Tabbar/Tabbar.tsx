import styles from "./Tabbar.module.css";
import { TabbarItem as TTabbarItem } from "@/interfaces/tabbarAndPopupInterface";
import { Envelope, Gift, MapPin, MusicNotes, Phone } from "@phosphor-icons/react";
import TabbarItem from "./TabbarItem/TabbarItem";
import ContactPopup from "../Popup/PopupItems/ContactPopup";
import { ReactNode } from "react";

const TABBAR_DATA: TTabbarItem[] = [
  { title: "Contact", logo: <Phone size={32} />, component: <ContactPopup /> },
  { title: "Song", logo: <MusicNotes size={32} />, component: null },
  { title: "Location", logo: <MapPin size={32} />, component: null },
  { title: "Gift", logo: <Gift size={32} />, component: null },
  { title: "RSVP", logo: <Envelope size={32} />, component: null },
];

const Tabbar: React.FC<{ onSelect: (title: string, component: ReactNode) => void }> = ({ onSelect }) => {
  return (
    <div className={styles["tabbar-container"]}>
      <div className={styles["tabbar-items"]}>
        {TABBAR_DATA.map((tabbarItem: TTabbarItem) => (
          <div
            key={tabbarItem.title}
            onClick={() => onSelect(tabbarItem.title, tabbarItem.component)}
          >
            <TabbarItem logo={tabbarItem.logo} title={tabbarItem.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabbar;
