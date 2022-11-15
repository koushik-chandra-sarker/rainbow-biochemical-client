import React from 'react';
import styles from "./Sidebar.module.scss"
import cls from "classnames";
import {CaretDownOutlined} from "@ant-design/icons";

const SubItem = ({children, name}) => {
  const [openItems, setOpenItems] = React.useState(false);
  return (
    <div className={cls(styles.sub_item)}>
      <div onClick={() => setOpenItems(!openItems)} className={styles.dropdown}>
        <span>{name} </span>
        <CaretDownOutlined className={cls(styles.dropdown_icon, openItems ? styles.open : "")}/>
      </div>
      <div className={cls(styles.dropdown_item, openItems ? styles.dropdown_item_open : "")}>
        {children}
      </div>
    </div>
  );
};

export default SubItem;