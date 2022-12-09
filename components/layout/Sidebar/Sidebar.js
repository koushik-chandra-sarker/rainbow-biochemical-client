import React, {useEffect} from 'react';
import cls from "classnames";
import styles from './Sidebar.module.scss';
import Item from "./Item";
import SubItem from "./SubItem";

const Sidebar = ({openSidebar}) => {
  const sidebar = React.useRef();
  useEffect(() => {
    if (openSidebar) {
      sidebar.current.style.transform = 'translateX(0)';
    } else sidebar.current.style.transform = 'translateX(-100%)';
  }, [openSidebar])
  return (
    <div ref={sidebar} className={cls(styles.sidebar,)} style={{top: "70px"}}>
      <Item href={"/product-categories"} name={"Products"}/>
      <SubItem name={"Biochemical"}>
        <Item href={"/"} name={"Home"}/>
        <Item href={"/about"} name={"About"}/>
        <Item href={"/client"} name={"Clients"}/>
      </SubItem>
      <Item href={"/contact"} name={"Contact"}/>
    </div>
  );
};

export default Sidebar;