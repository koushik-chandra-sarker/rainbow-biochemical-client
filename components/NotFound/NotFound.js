import React from 'react';
import Image from "next/image"
import notFound from "../../public/assets/imgs/nodatafound.png"
const NotFound = () => {
    return (
        <div className={'flex justify-center'}>
            <Image src={notFound} alt={'cvb'}/>
        </div>
    );
};

export default NotFound;