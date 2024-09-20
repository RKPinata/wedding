import styles from "./NavbarItem.module.css";

const NavbarItem: React.FC<{
  logo: React.ReactNode;
  title: string;
}> = ({ logo, title }) => {
  return (
    <button className={styles["navbar-button"]}>
      {logo}
      <p>{title}</p>
    </button>
  );
};

export default NavbarItem;
