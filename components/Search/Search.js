import React, {useEffect, useRef, useState} from 'react';
import {BiSearch} from "@react-icons/all-files/bi/BiSearch";
import cls from "classnames";
import {IoClose} from "@react-icons/all-files/io5/IoClose";
import style from './Search.module.scss';
import product from '../../public/assets/imgs/logo.jpg';
import Image from "next/image";

const Search = ({onKeyEnter}) => {
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const model = useRef();
  const content = useRef();

  function handleOnKeyDown(event) {
    if (event.key === 'Enter') {
      setOpenModal(true);
    }
  }

  function handleModalClose(event) {
    if (event.target !== content.current) {
      setOpenModal(false);
    } else setOpenModal(true);
  }

  useEffect(() => {
    if (openModal) {
      model.current.classList.add(style.modal_show)
      document.body.style.overflow = 'hidden';
    } else {
      model.current.classList.remove(style.modal_show)
      document.body.style.overflow = 'auto';
    }
  }, [openModal]);
  return (
    <>
      <div className={style.search}>
        <input id={"search-box"} className={cls(style.search_input, !openSearchBox ? style.hide_box : style.show_box)}
               type="text"
               placeholder='Search...'
               onKeyDown={(event) => handleOnKeyDown(event)}
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

      <section className={cls(style.modal)} ref={model} onClick={handleModalClose}>
        <div className={cls(style.modal_content)} ref={content}>
          <div className={cls(style.modal_header)}>
            <h2>Modal Header</h2>
          </div>
          <div className={cls(style.modal_body)}>
            <div className={'p-3 space-y-3'}>
              {
                [...Array(10)].map((_, index) => (
                  <div key={index} className={'flex gap-5 border overflow-hidden pr-3'}>
                    <Image className={'w-20 h-20 object-cover'} src={product} alt={'product'} width={100}
                           height={100}/>
                    <div className={'flex flex-col justify-between'}>
                      <div className={'grid flex-col mt-2'}>
                        <h1 className={'text-base font-bold'}>Product Name</h1>
                        <p className={'w-full text-sm whitespace-nowrap text-ellipsis overflow-hidden'}>Product
                          Description do
                          something
                          with
                          dialog result do
                          something with
                          dialog result do something with dialog result do something with dialog result do something
                          with
                          dialog result do something with dialog result do something with dialog resultdo something
                          with
                          dialog result</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Search;