import styles from "./Navbar.module.css";
import Popup from "../Popup/Popup";
import { NavbarItem as TNavbarItem } from "@/interfaces/navbarAndPopupInterface";
import {
  Envelope,
  Gift,
  MapPin,
  MusicNotes,
  Phone,
} from "@phosphor-icons/react";
import NavbarItem from "./NavbarItem/NavbarItem";

const NAVBAR_DATA: TNavbarItem[] = [
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

const Navbar = () => {
  return (
    <>
      <Popup />
      <div className={styles["navbar-container"]}>
        <div className={styles["navbar-items"]}>
          {NAVBAR_DATA.map((navbarItem: TNavbarItem) => (
            <NavbarItem
              key={navbarItem.title}
              logo={navbarItem.logo}
              title={navbarItem.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
