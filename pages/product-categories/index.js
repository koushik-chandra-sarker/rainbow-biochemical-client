import React from 'react';
import Link from "next/link";
import Image from "next/image";
import img from '../../public/assets/imgs/dishwasher-cat.png'

const Index = () => {
  const category = 'Biochemical'
  return (
    <div>
      <div className={'bg-gray-100'}>
        <h2 className={'text-center text-xl text-black pt-10 '}>MARKET PRODUCTS</h2>
        <div className={'mobile:w-8/12 full mx-auto  flex flex-wrap'}>
          {[1, 1, 1, 1, 1, 1, 1].map((v, i) => (
            <div className={'mobile:w-1/2 my-10 w-full '} key={i}>
              <Link href={`/product-categories/${category}`}>
                <div className={'mx-4 bg-white h-124 mb-8'}>
                  <Image src={img}
                         className={'h-124 object-cover hover:border-4 border-white w-full transition-all ease-linear duration-100'}/>
                  <h2 className={'text-center bg-white text-xl  text-black py-4'}>Bio Group</h2>
                </div>
              </Link>

            </div>))}

        </div>
      </div>
    </div>
  );
};

export default Index;