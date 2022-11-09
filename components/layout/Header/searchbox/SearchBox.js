import React from 'react';
import styles from './SearchBox.module.scss';
import cls from 'classnames';
import {IoClose} from "@react-icons/all-files/io5/IoClose";
import {BiSearch} from "@react-icons/all-files/bi/BiSearch";

const SearchBox = () => {
  return (
    <div className={cls(styles.search)}>
      <div className={cls(styles.search_bar)}>
        <input id='searchOne' type='checkbox'/>
        <label htmlFor='searchOne' className={"h-5 w-5"}>
          <BiSearch className={cls(styles.search_icon)}/>
          <IoClose className={cls(styles.search_icon, styles.last)}/>
          <p>|</p>
        </label>
        <input placeholder='Search...' type='text'/>
      </div>
    </div>
  );
};

export default SearchBox;