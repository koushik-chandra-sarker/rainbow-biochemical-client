import React from 'react';
import cls from "classnames";
import styles from './Sidebar.module.scss';
import Item from "./Item";
import SubItem from "./SubItem";

const Sidebar = () => {
  return (
    <div className={cls(styles.sidebar,)} style={{top: "70px"}}>
      <Item href={"/"} name={"Home"}/>
      <SubItem name={"Biochemical"}>
        <Item href={"/about"} name={"About"}/>
        <Item href={"/client"} name={"Clients"}/>
      </SubItem>
      <Item href={"/contact"} name={"Contact"}/>
    </div>
  );
};

export default Sidebar;