import Styles from "./TabbarItem.module.css";

const TabbarItem: React.FC<{
  logo: React.ReactNode;
  title: string;
}> = ({ logo, title }) => {
  return (
    <button className={Styles["tabbar-button"]}>
      {logo}
      <p>{title}</p>
    </button>
  );
};

export default TabbarItem;
