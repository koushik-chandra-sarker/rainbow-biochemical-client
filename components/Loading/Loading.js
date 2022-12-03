import React from 'react';
import styles from "./Loading.module.scss"
const Loading = () => {
    return (
        <div className={'flex justify-center items-center p-20'}>
            <span className={styles.loader}></span>
        </div>
    );
};

export default Loading;