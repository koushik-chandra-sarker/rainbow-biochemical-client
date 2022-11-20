import React from 'react';
import Link from "next/link";

const Index = () => {
  const category = 'Biochemical'
  return (<div>
      {/*<div className={'mobile:w-8/12 mx-auto w-full'}>*/}
      {/*    <h2 className={'uppercase text-center text-xl text-green-600 italic my-4'}>Market products</h2>*/}
      {/*</div>*/}
      <div className={'bg-gray-100 '}>
        <h2 className={'text-center text-xl py-4 text-black'}>MARKET PRODUCTS</h2>
        <div className={'mobile:w-8/12 full mx-auto  flex flex-wrap '}>
          {[1, 1, 1, 1, 1, 1, 1].map((v, i) => (

            <div className={'mobile:w-1/2  w-full my-10'} key={i}>
              <Link href={`/products/${category}`}>
                <div className={'mx-8 bg-white h-124 mb-8'}>
                  <img src={'/assets/imgs/home1.jpg'}
                       className={'h-124 object-cover hover:border-4 border-white w-full'}/>
                  <h2 className={'text-center bg-white text-xl  text-black py-4'}>Bio Group</h2>
                </div>
              </Link>

            </div>))}

        </div>
      </div>
    </div>);
};

export default Index;