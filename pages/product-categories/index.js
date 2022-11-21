import React from 'react';
import Link from "next/link";
import Image from "next/image";
import img from '../../public/assets/imgs/dishwasher-cat.png'
import Head from "next/head";
import {useGetSiteDetailsQuery} from "../../services/siteDetails/siteDetailsApi";

const Index = () => {
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);
  // const [data, setData] = React.useState(null);
  const category = 'Biochemical'
  const data = useGetSiteDetailsQuery();

  console.log(data);
  return (
    <div>
      <Head>
        <title>Biochemical | Product Categories</title>
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
        <meta property="og:title" content={category}/>
        <meta property="og:description"
              content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        <meta property="og:image" content="https://www.biochemical.com.bd/images/logo.png"/>
        <meta property="og:url" content="https://www.biochemical.com.bd/"/>
        <meta property="og:site_name" content="Biochemical | Product Categories"/>
        <meta property="og:type" content="website"/>
        {/*create meta for twitter*/}
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={category}/>
        <meta name="twitter:description"
              content="Biochemical is a leading importer, supplier, marketing and trading various kinds of Products & services to national & multinational company in Bangladesh. Presently Biochemical is operating its Business with permanent setup in Dhaka, Chittagong & Cox’s Bazar and servicing the customers with ultimate satisfaction and excellence."/>
        <meta name="twitter:image" content="https://www.biochemical.com.bd/images/logo.png"/>
        <meta name="twitter:site" content="https://www.biochemical.com.bd/"/>
        <meta name="twitter:creator" content="Biochemical"/>

      </Head>
      <div className={'bg-gray-100'}>
        <h2 className={'text-center text-xl text-black pt-10 '}>MARKET PRODUCTS</h2>
        <div className={'mobile:w-8/12 full mx-auto  flex flex-wrap'}>
          {[1, 1, 1, 1, 1, 1, 1].map((v, i) => (
            <div className={'mobile:w-1/2 my-10 w-full '} key={i}>
              <Link href={`/product-categories/${category}`}>
                <div className={'mx-4 bg-white h-124 mb-8'}>
                  <Image src={img} alt={"aa"}
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