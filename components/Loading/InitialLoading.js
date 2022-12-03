import React from 'react';
import Image from "next/image";
import logo from "../../public/assets/imgs/logo.jpg";
import styles from "./InitialLoading.module.scss"

const InitialLoading = () => {
  return (
    <div className={"fixed top-0 bottom-0 left-0 right-0 bg-white"} style={{zIndex: 5000}}>
      <div className={"relative flex flex-col w-full h-full justify-center items-center"}>
        <Image src={logo} alt={"logo"} width={200} height={2}/>
        <div className={"absolute"}>
          <span className={styles.loader}></span>
        </div>

      </div>

    </div>
  );
};

export default InitialLoading;