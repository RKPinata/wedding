import styles from "./TabbarItem.module.css";

const TabbarItem: React.FC<{
  logo: React.ReactNode;
  title: string;
}> = ({ logo, title }) => {
  const handleClick = () => {
    console.log(title);
  };

  return (
    <button className={styles["tabbar-button"]} onClick={handleClick}>
      {logo}
      <p>{title}</p>
    </button>
  );
};

export default TabbarItem;
