import React from 'react';
import styles from "./Sidebar.module.scss"
import cls from "classnames";
import Link from "next/link";

const Item = ({href = "#", name}) => {
  return (
    <Link href={href} className={cls(styles.item)}>
      {name}
    </Link>
  );
};

export default Item;