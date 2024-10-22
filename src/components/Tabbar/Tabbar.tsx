import Styles from "./Tabbar.module.css";
import { TabbarItem as TTabbarItem } from "@/interfaces/tabbarAndPopupInterface";
import { Envelope, Gift, MapPin, Phone } from "@phosphor-icons/react";
import TabbarItem from "./TabbarItem/TabbarItem";
import ContactPopup from "../Popup/PopupItems/ContactPopup/ContactPopup";
import { ReactNode } from "react";
import Rsvp from "../Popup/PopupItems/RSVP/Rsvp";
import LocationPopup from "../Popup/PopupItems/LocationPopup/LocationPopup";
import GiftPopup from "../Popup/PopupItems/GiftPopup/GiftPopup";

const TABBAR_DATA: TTabbarItem[] = [
  { title: "Contact", logo: <Phone size={32} />, component: <ContactPopup /> },
  { title: "Location", logo: <MapPin size={32} />, component: <LocationPopup /> },
  { title: "Gift", logo: <Gift size={32} />, component: <GiftPopup /> },
  { title: "RSVP", logo: <Envelope size={32} />, component: <Rsvp /> },
];

const Tabbar: React.FC<{ onSelect: (title: string, component: ReactNode) => void }> = ({ onSelect }) => {
  return (
    <div className={Styles["tabbar-container"]}>
      <div className={Styles["tabbar-items"]}>
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
