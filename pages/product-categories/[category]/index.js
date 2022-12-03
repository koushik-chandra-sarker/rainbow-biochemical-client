import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import {useRouter} from "next/router";
import {useGetCategoryByNameQuery} from "../../../services/product/productApi";
import error from "../../../public/assets/imgs/404.webp"
import Loading from "../../../components/Loading/Loading";
import _ from "lodash"
import NotFound from "../../../components/NotFound/NotFound";
import {isEven} from "../../../utils/common";

import ServerError from "../../../components/ServerError/ServerError";
const Index = () => {
  const router = useRouter();
  const {category} = router.query;
  const subCategory = "sub-category";

  function isEven(n) {
    return n % 2 == 0;
  }

  const {data, isLoading, isSuccess, isError} = useGetCategoryByNameQuery(category);
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
      {isLoading && <div><Loading/></div>}
      {isSuccess && (!_.isEmpty(data) ?
          <div className={'bg-gray-100'}>
            <div className={'mobile:w-8/12 mx-auto px-4 text-center text-xl text-black pt-10 '}>
              <h2
                className={'w-full border py-5 tablet:text-3xl text-xl uppercase font-bold text-gray-500'}>{category}</h2>
            </div>
            <div className={'mobile:w-8/12 full mx-auto  flex flex-wrap'}>
              {
                data[0]?.sub_category.map((v, i) => (
                  <div className={'mobile:w-1/2 my-10 w-full '} key={i}
                       data-aos={isEven(i) ? "fade-right" : "fade-left"}
                       data-aos-offset="100"
                       data-aos-easing="ease-in-sine">
                    <Link href={`${router.asPath}/${v.name}`}>
                      <div className={'mx-4 bg-white h-124 mb-8'}>
                        <Image src={v.thumbnail} alt={"aa"} height={2} width={1500}
                               className={'h-124 object-cover hover:border-4 border-white w-full transition-all ease-linear duration-100'}/>
                        <h2 className={'text-center bg-white text-xl  text-black py-4'}>{v.name}</h2>
                      </div>
                    </Link>

                  </div>))}

            </div>
          </div> : <NotFound/>
      )}
      {isError && <div>
        <ServerError error={error.status}/>
      </div>
      }

    </div>
  );
};

export default Index;