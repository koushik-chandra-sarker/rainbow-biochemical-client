import React from 'react';
import {useRouter} from "next/router";
import styles from './Index.module.scss';

const Index = () => {
  const {link} = useRouter().query;
  return (
    <div className={styles.mapView}>
      <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map"
              scrolling="no"
              src={link}
      />
    </div>
  );
};

export default Index;