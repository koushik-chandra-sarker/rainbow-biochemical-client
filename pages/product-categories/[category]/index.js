import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import img from '../../../public/assets/imgs/p2.jpg'
import styles from '../Product.module.scss'
import cls from "classnames";
import Head from "next/head";

const Index = () => {
  const router = useRouter()
  const {category} = router.query
  useEffect(() => {
    console.log(category)
  }, [category])
  return (<div>
    <Head>
      <title>Biochemical | Product Category - {category}</title>
      <meta name="description"
            content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
      {/*create meta for SEO*/}
      <meta name="keywords"
            content="Product Categories, Biochemical Product Categories, Biochemical Product Categories in Bangladesh, Biochemical Product Categories in Asia, Biochemical Product Categories in Dhaka, Biochemical Product Categories in Chittagong, Biochemical Product Categories in Cox's Bazar, Biochemical Product Categories in Bangladesh, Biochemical Product Categories in Asia, Biochemical Product Categories in Dhaka, Biochemical Product Categories in Chittagong, Biochemical Product Categories in Cox's Bazar"/>
      <meta name="author" content="Biochemical"/>
      <meta name="robots" content="index, follow"/>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="English"/>
      <meta name="revisit-after" content="7 days"/>
      <meta name="distribution" content="web"/>
      <meta name="rating" content="general"/>
      {/*create meta for facebook*/}
      <meta property="og:title" content="Biochemical | Product Category - {category}"/>
      <meta property="og:description"
            content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
      <meta property="og:image" content="https://biochemicalbd.com/assets/imgs/p2.jpg"/>
      <meta property="og:url" content="https://biochemicalbd.com/product-categories/{category}"/>
      <meta property="og:site_name" content="Biochemical"/>
      <meta property="og:type" content="website"/>
      {/*create meta for twitter*/}
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content="Biochemical | Product Category - {category}"/>
      <meta name="twitter:description"
            content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
      <meta name="twitter:image" content="https://biochemicalbd.com/assets/imgs/p2.jpg"/>
      <meta name="twitter:site" content="@biochemicalbd"/>
      <meta name="twitter:creator" content="@biochemicalbd"/>


    </Head>
    <div className={'bg-gray-100 py-10'}>
      <div className={'mobile:w-8/12 mx-auto w-full flex  my-10'}>
        <div className={'mobile:w-1/4 w-full px-2'}>
          <input
            type="text" name="phone" placeholder={'RELEVANT DEPARTMENT'}
            className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className={'mobile:w-1/4 w-full px-2'}>
          <input
            type="text" name="phone" placeholder={'RELEVANT DEPARTMENT'}
            data-dropdown-toggle="dropdownDefaultCheckbox"
            className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className={'mobile:w-1/4 w-full px-2'}>
          <input
            type="text" name="phone" placeholder={'RELEVANT DEPARTMENT'}
            className="w-full text-sm mb-4 text-gray-400  placeholder-gray-400  pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className={'mobile:w-1/4 w-full px-2'}>
          <button
            type="text" name="phone" placeholder={'RELEVANT DEPARTMENT'}
            className="w-full text-sm mb-4 text-white  bg-red-600 pl-8 rounded-md border border-gray-300  focus:border-black
                          outline-none bg-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">Search
          </button>
        </div>

      </div>

      <div className={'pb-16'}>
        <div className={'w-8/12 mx-auto mt-10 flex flex-wrap py-2'}>
          {[1, 1, 1, 1, 1, 1].map((v, i) => (
            <div className={'mobile:w-1/3 w-full mt-8'} key={i}>
              <Link href={`/product-categories/${category}/${i}`} className={cls(styles.product, "cursor-pointer")}>
                <div className={'mx-4 bg-white'}>
                  <Image src={img} className={'h-80 object-contain p-8  w-full'}/>
                  <h2 className={'text-center px-8 pb-2 text-gray-500'}>Multi Surface & Odor Eliminator
                    Concentrated</h2>
                  <div className={'justify-center flex'}>
                    <button
                      className={cls(styles.button, "w-32 uppercase font-semibold align-center items-center flex justify-center  text-gray-500  bg-white py-4 text-sm")}>
                      Details
                    </button>
                  </div>
                </div>
              </Link>
            </div>

          ))}

        </div>
      </div>
    </div>
  </div>);
};

export default Index;