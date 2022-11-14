import React, {useState} from 'react';
import {BiSearch} from "@react-icons/all-files/bi/BiSearch";
import cls from "classnames";
import {IoClose} from "@react-icons/all-files/io5/IoClose";
import style from './Search.module.scss';

const Search = () => {
  const [openSearchBox, setOpenSearchBox] = useState(false);
  return (
    <div className={style.search}>
      <input id={"search-box"} className={cls(style.search_input, !openSearchBox ? style.hide_box : style.show_box)}
             type="text"
             placeholder='Search...'
      />
      <label htmlFor='search-box'>
        <BiSearch
          onClick={() => setOpenSearchBox(true)}
          className={cls(style.search_icon, openSearchBox ? style.remove_icon : style.add_icon)}/>
        <IoClose
          onClick={() => setOpenSearchBox(false)}
          className={cls(style.search_icon, style.last, !openSearchBox ? style.remove_icon : style.add_icon)}/>
      </label>
    </div>
  );
};

export default Search;