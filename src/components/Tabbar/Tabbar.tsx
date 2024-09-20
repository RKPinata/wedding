import styles from "./Tabbar.module.css";
import { TabbarItem as TTabbarItem } from "@/interfaces/tabbarAndPopupInterface";
import {
  Envelope,
  Gift,
  MapPin,
  MusicNotes,
  Phone,
} from "@phosphor-icons/react";
import TabbarItem from "./TabbarItem/TabbarItem";

const NAVBAR_DATA: TTabbarItem[] = [
  {
    title: "Contact",
    logo: <Phone size={32} />,
  },
  {
    title: "Song",
    logo: <MusicNotes size={32} />,
  },
  {
    title: "Location",
    logo: <MapPin size={32} />,
  },
  {
    title: "Gift",
    logo: <Gift size={32} />,
  },
  {
    title: "RSVP",
    logo: <Envelope size={32} />,
  },
];

const Tabbar = () => {
  return (
    <>
      <div className={styles["tabbar-container"]}>
        <div className={styles["tabbar-items"]}>
          {NAVBAR_DATA.map((tabbarItem: TTabbarItem) => (
            <TabbarItem
              key={tabbarItem.title}
              logo={tabbarItem.logo}
              title={tabbarItem.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tabbar;
